import type { IconType } from 'react-icons';
import { FaCode } from 'react-icons/fa6';
import {
  SiPython, SiTypescript, SiGit, SiGithub, SiReact, SiNextdotjs, SiMui, SiVite,
  SiMaptiler, SiMaplibre, SiThreedotjs, SiFastapi, SiOpenapiinitiative, SiPostman,
  SiApachekafka, SiDatabricks, SiNpm, SiPnpm, SiTurborepo, SiGithubactions,
  SiEslint, SiPrettier, SiLefthook, SiRuff, SiKnip, SiVitest, SiPytest, SiJest,
  SiDocker, SiKubernetes, SiKeycloak, SiVault, SiNewrelic, SiGrafana, SiCline,
  SiGithubcopilot, SiGooglegemini, SiNotebooklm, SiClaude,
} from 'react-icons/si';

type Skill = {
  name: string;
  icon?: IconType;
  color: string;
  mark?: string;
};

const groups: { name: string; skills: Skill[] }[] = [
  {
    name: 'Languages & Source Control',
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#24292F' },
    ],
  },
  {
    name: 'Frontend & UI',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#111827' },
      { name: 'MUI', icon: SiMui, color: '#007FFF' },
    ],
  },
  {
    name: 'Maps & 3D',
    skills: [
      { name: 'MapTiler', icon: SiMaptiler, color: '#2F80ED' },
      { name: 'MapLibre', icon: SiMaplibre, color: '#396CB2' },
      { name: 'Three.js', icon: SiThreedotjs, color: '#111827' },
    ],
  },
  {
    name: 'Backend & API',
    skills: [
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'OpenAPI', icon: SiOpenapiinitiative, color: '#6BA539' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ],
  },
  {
    name: 'Build & Development Workflow',
    skills: [
      { name: 'npm', icon: SiNpm, color: '#CB3837' },
      { name: 'pnpm', icon: SiPnpm, color: '#F69220' },
      { name: 'Turborepo', icon: SiTurborepo, color: '#111827' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
      { name: 'Vite', icon: SiVite, color: '#646CFF' },
      { name: 'Rsbuild', color: '#7C3AED', mark: 'RS' },
    ],
  },
  {
    name: 'Code Quality & Testing',
    skills: [
      { name: 'ESLint', icon: SiEslint, color: '#4B32C3' },
      { name: 'Prettier', icon: SiPrettier, color: '#F7B93E' },
      { name: 'Husky', color: '#805B42', mark: 'H' },
      { name: 'Lefthook', icon: SiLefthook, color: '#E4572E' },
      { name: 'Ruff', icon: SiRuff, color: '#D7FF64' },
      { name: 'Knip', icon: SiKnip, color: '#F28C28' },
      { name: 'Vitest', icon: SiVitest, color: '#6E9F18' },
      { name: 'Pytest', icon: SiPytest, color: '#0A9EDC' },
      { name: 'Jest', icon: SiJest, color: '#C21325' },
      { name: 'Playwright', color: '#2EAD33', mark: 'PW' },
    ],
  },
  {
    name: 'Infrastructure, Security & Observability',
    skills: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
      { name: 'K9s', color: '#326CE5', mark: 'K9' },
      { name: 'Keycloak', icon: SiKeycloak, color: '#4D4D4D' },
      { name: 'Vault', icon: SiVault, color: '#FFEC6E' },
      { name: 'Wiz', color: '#5A5DF0', mark: 'W' },
      { name: 'Black Duck', color: '#272727', mark: 'BD' },
      { name: 'New Relic', icon: SiNewrelic, color: '#1CE783' },
      { name: 'Grafana', icon: SiGrafana, color: '#F46800' },
    ],
  },
  {
    name: 'Data Platforms',
    skills: [
      { name: 'Kafka', icon: SiApachekafka, color: '#231F20' },
      { name: 'Databricks', icon: SiDatabricks, color: '#FF3621' },
    ],
  },
  {
    name: 'AI Tools',
    skills: [
      { name: 'Cline', icon: SiCline, color: '#6B4EFF' },
      { name: 'GitHub Copilot', icon: SiGithubcopilot, color: '#111827' },
      { name: 'Gemini', icon: SiGooglegemini, color: '#4285F4' },
      { name: 'NotebookLM', icon: SiNotebooklm, color: '#7B61FF' },
      { name: 'Claude', icon: SiClaude, color: '#C15F3C' },
      { name: 'Codex', icon: FaCode, color: '#4258FF' },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="space-y-4" aria-labelledby="skills-title">
      <h5 id="skills-title" className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)] sm:text-sm">
        Web Engineering Skills
      </h5>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {groups.map((group) => (
          <section key={group.name} className="rounded-xl border border-[var(--line)] bg-[var(--sand-1)]/55 p-3 sm:p-4">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)] sm:text-xs">
              {group.name}
            </h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.skills.map(({ name, icon: Icon, color, mark }) => (
                <li key={name}>
                  <span className="inline-flex min-h-8 items-center gap-1.5 rounded-lg border border-[var(--line)] bg-[var(--paper)] px-2 py-1 text-[11px] leading-none text-[var(--ink)] sm:text-xs">
                    {Icon ? (
                      <Icon aria-hidden="true" className="h-4 w-4 shrink-0" style={{ color }} />
                    ) : (
                      <span aria-hidden="true" className="grid h-4 min-w-4 shrink-0 place-items-center rounded-sm px-0.5 text-[8px] font-bold text-white" style={{ backgroundColor: color }}>
                        {mark}
                      </span>
                    )}
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
