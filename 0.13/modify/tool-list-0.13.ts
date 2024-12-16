import { defineDevCollectiveToolList } from "@theweave/moss-types";

export default defineDevCollectiveToolList({
  developerCollective: {
    id: "lightningrodlabs",
    name: "Lightningrod Labs",
    description: "Nurturing The Holochain Ecosystem",
    icon: "https://lightningrodlabs.org/lrl_logo.png",
    contact: {
      website: "https://lightningrodlabs.org",
    },
  },
  tools: [
    {
      id: "kando",
      versionBranch: "0.11.x",
      title: "KanDo",
      subtitle: "Kanban board.",
      description: "Kanban board",
      icon: "https://theweave.social/images/kando_icon.png",
      tags: ["test", "tag2"],
      versions: [
        {
          version: "0.11.3",
          url: "https://github.com/holochain-apps/kando/releases/download/v0.11.3/kando.webhapp",
          hashes: {
            happSha256: "sdfasdfasdf",
            uiSha256: "asdfasfdasd",
            webhappSha256: "asdfasdf",
          },
          changelog: "Same new",
          releasedAt: 1733836508786,
        },
      ],
    },
    {
      id: "matthme.presence",
      versionBranch: "0.10.x",
      title: "Presence",
      subtitle: "Video Calls",
      description: "Peer-to-peer video calls with screen sharing.",
      icon: "https://github.com/matthme/presence/blob/main/ui/icon.png?raw=true",
      tags: ["test", "tag2"],
      versions: [
        {
          version: "0.10.0-alpha.0",
          url: "https://github.com/matthme/presence/releases/download/0.10.0-alpha.0/presence.webhapp",
          hashes: {
            happSha256:
              "9ce385b71bd9e26944eb34e532e459ff32813a39637c14fce11ef2f45a37890c",
            webhappSha256:
              "165a7d19fce921333d342f96311e4264ca4d187f14a3a5e483a909a3297146d0",
            uiSha256:
              "329d17b4435bf177158330db13a0cffb90e83e841e3a57514499da6bd9d6b4f8",
          },
          changelog: "Updated to hdk 0.4.0-rc.1",
          releasedAt: 1734207098381,
        },
        {
          version: "0.10.0-alpha.1",
          url: "https://github.com/matthme/presence/releases/download/0.10.0-alpha.1/presence.webhapp",
          hashes: {
            happSha256:
              "9ce385b71bd9e26944eb34e532e459ff32813a39637c14fce11ef2f45a37890c",
            webhappSha256:
              "751a509602ff86da951122988a3cb45a838871f0c2e6a6ff75f8b7022a0b1a62",
            uiSha256:
              "a81f4ebdc6c60423450bdeda194029ceae0fe043e1d3fe103d9b0187290e7f04",
          },
          changelog: "* adapt clone cell logic to new WeaveClient",
          releasedAt: 1734343302072,
        },
      ],
    },
  ],
});
