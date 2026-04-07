<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Git Push Safety Rule

- Never run `git push` automatically.
- Only push when the user gives an explicit command to push (for example: "push now", "please push", or "deploy and push").

## Post-Change Verification Rule

- After making code changes, always run `npm run build` and fix any build errors before finishing.
- After a successful build, run `npm run dev` and verify the app starts on localhost (for example: `http://localhost:3000`).
<!-- END:nextjs-agent-rules -->
