/**
 * PM2 Ecosystem Config for Whiz-Unik Email Server
 *
 * ─── Commands ──────────────────────────────────────────────
 * Start:    pm2 start ecosystem.config.cjs
 * Stop:     pm2 stop ecosystem.config.cjs
 * Restart:  pm2 restart ecosystem.config.cjs
 * Status:   pm2 status
 * Logs:     pm2 logs whizunik-email
 * Monitor:  pm2 monit
 *
 * Persist across reboots (do once):
 *   pm2 save                         # Save the process list
 *   pm2 startup                      # Generate startup script
 *
 * ─── Notes ─────────────────────────────────────────────────
 * - The .env file is loaded automatically from the backend/
 *   directory by the server's dotenv.config() call.
 * - Logs are written to backend/logs/.
 * - Auto-restarts if memory exceeds 200 MB or the process
 *   crashes unexpectedly.
 */
module.exports = {
  apps: [
    {
      name: "whizunik-email",
      script: "server/emailServer.cjs",
      cwd: __dirname,
      // Explicitly point to the .env file for transparency
      env_file: ".env",
      env: {
        NODE_ENV: "production",
      },
      // Auto-restart if the process crashes (non-zero exit)
      autorestart: true,
      // Watch for file changes (disable in production)
      watch: false,
      // Max memory before automatic restart
      max_memory_restart: "200M",
      // Log configuration
      error_file: "logs/pm2-error.log",
      out_file: "logs/pm2-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      // Merge logs from different instances
      merge_logs: true,
      // Do not restart on clean exit (code 0)
      stop_exit_codes: [0],
    },
  ],
};
