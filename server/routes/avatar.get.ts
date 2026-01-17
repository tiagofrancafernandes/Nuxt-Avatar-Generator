function normalizeText(value: string): string {
    return value
        .trim()
        .replace(/\s+/g, ' ')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

function getInitials(name: string): string {
    const clean = normalizeText(name);
    if (!clean) return '??';

    const parts = clean.split(' ').filter(Boolean);

    if (parts.length >= 2) {
        const first = parts[0][0] ?? '';
        const last = parts[parts.length - 1][0] ?? '';
        return (first + last).toUpperCase().slice(0, 2);
    }

    return clean.slice(0, 2).toUpperCase();
}

function escapeXml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

function normalizeColor(value: string): string {
    const v = value.trim();

    if (/^[0-9a-fA-F]{3}$/.test(v) || /^[0-9a-fA-F]{6}$/.test(v)) {
        return `#${v}`;
    }

    return v;
}

function clampInt(value: unknown, min: number, max: number, fallback: number): number {
    const n = Number(value);
    if (!Number.isFinite(n)) return fallback;
    return Math.min(max, Math.max(min, Math.trunc(n)));
}

export default defineEventHandler((event) => {
    const query = getQuery(event);

    const name = String(query.name ?? '');
    const size = clampInt(query.size, 16, 512, 64);
    const color = normalizeColor(String(query.color ?? '#FFFFFF'));
    const background = normalizeColor(String(query.background ?? '#111827'));

    const initials = getInitials(name);

    const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}px" height="${size}px" viewBox="0 0 ${size} ${size}" version="1.1" role="img" aria-label="${escapeXml(initials)}">
  <rect width="${size}" height="${size}" rx="${size / 2}" ry="${size / 2}" fill="${escapeXml(background)}" />
  <text
    x="50%"
    y="50%"
    alignment-baseline="middle"
    dominant-baseline="middle"
    text-anchor="middle"
    dy=".1em"
    font-size="${Math.round(size * 0.44)}"
    font-weight="400"
    fill="${escapeXml(color)}"
    style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
  >${escapeXml(initials)}</text>
</svg>`.trim();

    setHeader(event, 'Content-Type', 'image/svg+xml; charset=utf-8');
    setHeader(event, 'Cache-Control', 'public, max-age=86400, s-maxage=86400, immutable');

    return svg;
});
