import { RequestOptions, RoqBaasSdk } from './roq-baas-sdk';
import { Platform } from '@roq/nodejs';

export type ExtendedPlatform = Omit<Platform, 'asUser'> & {
  asUser(): ReturnType<Platform['asUser']>;
};

export class RoqBackendClient {
  private backendHost: string;
  private baseOptions?: RequestOptions;
  public roqPlatform: ExtendedPlatform;
  private authStorage: Record<string, string>;

  constructor(authStorage: Record<string, string>, baseOptions: RequestOptions = {}) {
    this.authStorage = authStorage;
    this.baseOptions = baseOptions;
    this.backendHost = process.env.ROQ_API_URL || '';
    const roqPlatform = new Platform({
      host: process.env.ROQ_PLATFORM_URL || '',
      environmentId: process.env.ROQ_ENVIRONMENT_ID || '',
      apiKey: process.env.ROQ_API_KEY || '',
    });
    const base64UrlDecode = (str: string) => {
      str = str.replace(/-/g, '+').replace(/_/g, '/');
      while (str.length % 4) {
        str += '=';
      }
      return Buffer.from(str, 'base64').toString();
    };
    const decodeJWT = (jwt: string) => {
      const parts = jwt.split('.');
      if (parts.length !== 3) {
        throw new Error('The JWT is not correctly formatted');
      }
      const header = JSON.parse(base64UrlDecode(parts[0]));
      const payload = JSON.parse(base64UrlDecode(parts[1]));
      const signature = parts[2];

      return {
        header,
        payload,
        signature,
      };
    };
    const asUser = () => {
      const { payload } = decodeJWT(this.authStorage['roq-session-token']);
      return roqPlatform.asUser(payload.roqUserId);
    };
    this.roqPlatform = Object.assign(roqPlatform, { asUser });
  }

  public asUser() {
    return new RoqBaasSdk(this.backendHost, {
      ...this.baseOptions,
      headers: {
        ...this.baseOptions?.headers,
        authorization: `Bearer ${this.authStorage['roq-session-token']}`,
      },
    });
  }

  public asSuperAdmin() {
    return new RoqBaasSdk(this.backendHost, {
      ...this.baseOptions,
      headers: {
        authorization: `Basic ${Buffer.from(`${process.env.ROQ_ENVIRONMENT_ID}:${process.env.ROQ_API_KEY}`).toString(
          'base64',
        )}`,
      },
    });
  }
}
