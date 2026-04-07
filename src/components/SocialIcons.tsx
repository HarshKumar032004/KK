export type SocialPlatform = 'facebook' | 'instagram';

interface SocialIconProps {
  platform: SocialPlatform;
  size?: number;
  className?: string;
}

const paths: Record<SocialPlatform, string> = {
  facebook: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  instagram: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7.5 2h9a5.5 5.5 0 0 1 5.5 5.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z',
};

export function SocialIcon({ platform, size = 15, className = '' }: SocialIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[platform]} />
    </svg>
  );
}

export const socialLinks: { platform: SocialPlatform; href: string }[] = [
  { platform: 'facebook', href: 'https://www.facebook.com/profile.php?id=100051233531381' },
  { platform: 'instagram', href: 'https://www.instagram.com/kksingh_ias/' },
];
