// Tipos TypeScript para a página de download

export interface PlatformDetail {
  label: string;
  value: string;
}

export interface DownloadFormat {
  extension: string;
  description: string;
  url: string;
}

export interface Platform {
  id: string;
  name: string;
  description: string;
  icon: string;
  isActive: boolean;
  details: PlatformDetail[];
  formats?: DownloadFormat[];
  status?: string;
  previewDate?: string;
}

export interface SystemRequirement {
  icon: string;
  title: string;
  description: string;
}

export interface InstallationMethod {
  icon: string;
  title: string;
  command: string;
}

export interface SupportLink {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface DownloadUrls {
  deb: string;
  'tar.gz': string;
  appimage: string;
}

// Extensão global do Window para funções de download
declare global {
  interface Window {
    downloadPlatform: (platformId: string) => void;
    downloadLinux: () => void;
    downloadFormat: (format: keyof DownloadUrls) => void;
    closeModal: () => void;
  }
}

export {};
