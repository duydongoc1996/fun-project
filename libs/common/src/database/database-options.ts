export interface DatabaseOptions {
  type: string;
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;

  schema: Record<string, unknown>;
}
