import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';

function quoteApiPlugin(): Plugin {
  return {
    name: 'quote-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/quote', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Method Not Allowed' }));
          return;
        }

        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });

        req.on('end', () => {
          try {
            const data = JSON.parse(body || '{}');
            const errors: Record<string, string> = {};

            if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
              errors.name = 'Please enter your name.';
            }

            const cleanPhone = (data.phone || '').toString().replace(/\D/g, '');
            if (!cleanPhone || cleanPhone.length < 10) {
              errors.phone = 'Please enter a valid 10-digit mobile number.';
            }

            if (!data.location || typeof data.location !== 'string' || data.location.trim().length < 2) {
              errors.location = 'Please specify your site location in Kerala.';
            }

            const validServices = [
              'Factory & Building Demolition',
              'Heavy Machinery Dismantling',
              'Industrial Metal Scrap Removal',
              'Site Clearance & Leveling',
            ];
            const service = validServices.includes(data.service)
              ? data.service
              : 'Factory & Building Demolition';

            if (Object.keys(errors).length > 0) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ errors }));
              return;
            }

            const referenceId = 'AZI-' + Date.now().toString().slice(-6);

            console.log(`[Azi Engineering Works] Local Dev Enquiry (${referenceId}):`, {
              name: data.name.trim(),
              phone: cleanPhone,
              service,
              location: data.location.trim(),
              notes: data.description ? data.description.trim() : 'N/A',
              receivedAt: new Date().toISOString(),
            });

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(
              JSON.stringify({
                success: true,
                referenceId,
                message: 'Quotation request received successfully.',
              })
            );
          } catch (err) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Invalid JSON payload' }));
          }
        });
      });
    },
  };
}

export default defineConfig(() => {
  const rootDir = import.meta.dirname ?? path.resolve('.');

  return {
    plugins: [react(), tailwindcss(), quoteApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(rootDir, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
