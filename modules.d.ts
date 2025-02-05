declare namespace NodeJS {
  export interface ProcessEnv {
    ENV: string;
    BASE_URL: string;
    ADMIN_USER: string;
    ADMIN_PASS: string;
  }
}
