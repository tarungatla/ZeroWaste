import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

// Read the certificate file (if needed)
// If the certificate is provided directly in your connection string, you can skip this step
const sslCertificate = `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUOVFl2WfgUgy5EysgUVWKzE4XyI8wDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvYTJkZjg1ZGEtYzY2OS00ODRhLWFhNGItY2E1M2E5NGQ2
Y2NmIFByb2plY3QgQ0EwHhcNMjQxMjAyMDgyNzQzWhcNMzQxMTMwMDgyNzQzWjA6
MTgwNgYDVQQDDC9hMmRmODVkYS1jNjY5LTQ4NGEtYWE0Yi1jYTUzYTk0ZDZjY2Yg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAJl09pQu
nN2IAw+m6UpF7tLi8MZCu/B2dOW1oY/ZhiiBZ0zoY9EZcPRJTdRsVetrJKALvhCc
YEqDiq6XzDrbSU6pCt8rRN9iQJnMnI0NmB6aRL9XmIXzeWcQDLq3g8EaSeQ08Kme
VRsPlOFOBM+YkS/HWGf2mKQOLn4DD7r1fFWqBN+EvJHMLw3VTpTrT2CmpombCHej
w05gZMhnZ6sw7DkjH9046E6+hqT/u3DQLzBsRryJVof64cjcrueUXuCGWuWDs05n
zU+xqBrnIvXrE4U22bKUw9Cd4o9yDZDPTSVNKEt03zdHxLML612ASlvvinXYKiv2
chxntCMb3+9/QLaKv9hTHoUuAyFPVSwFkaBF5ZJF4cetin6dbt/yJWmoc25BkQ91
ejex8jqsMdZ7NuZJNuChAMiyi6XsW7K0fb2SLEuKjteNeznxe9go0wC2u0KVYptP
A8bmlWhUnzZt6bE+afHiKQ88MmSzDugrcUVCLcFHZcvLET7H1JGolUeobwIDAQAB
oz8wPTAdBgNVHQ4EFgQUI3yKypl+rb4uFkWTZfH6zvXJcYYwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAAnTm7m/+k/6yTyX
xCz7JFS8JHGOKPxNfEvVXVQOBka3l+ZPPpeHmdTjaIbzNiT8scsXw1Zzfzr7yStu
dwlUyWitOlHo7ZxZV87vTvzNOwy+FH2hw0vcEayNe29hJG8obRDPBsSs8fazWy/c
F1sOnlyFCqQNW2lKpZXWYgsPWOo0dAZmcO1lRNadlSRG3FJ4U5uA9vf/nZpVwjLK
MpcaMOokXadDtjVAJQOqoY68GxcUeTpFlEeTvWBAVHE62Hbpq9D+Pb0GGwZveLmW
tcgPdXfTCPdSFTgv0jsMQL3IKBJMAOZaZdR+FAidH1p5dFwvNCkLaF++ST6AUa/g
zRA6usG/lTw0RQb1ogEq0X/PsYixysfmE2hT7l9bUISgonQVz6+oboG1jetdbnDk
FYyxByrp5yYtQrcLM/0DNFAuQcNd3l7rmBbKOFV0+V0bmyjyZm4u8PbPr2iR7wQs
YXmxqzLb2D4/5v1gJ493eKnOlIMMBaFiBLLL8sGVzqFQPdOeWA==
-----END CERTIFICATE-----`;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: true,
    ca: sslCertificate, // Using the certificate directly if necessary
  },
});

export const db = drizzle(pool, { schema });
