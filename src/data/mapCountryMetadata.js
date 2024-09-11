import {
  BD,
  BN,
  BT,
  CN,
  HK,
  ID,
  IN,
  JP,
  KH,
  KR,
  LA,
  LK,
  MM,
  MN,
  MO,
  MY,
  NP,
  PH,
  SG,
  TH,
  TW,
  VN,
} from "country-flag-icons/react/3x2";

const mapCountryMetadataList = {
  "Arise Mongolia": {
    FlagIcon: MN,
    title: "Mongolia",
    transformOrigin: {
      horizontal: "middle",
      vertical: "bottom",
    },
    twMapOffset: "top-[18%] left-[57%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#mn:not(:hover)]:hidden",
  },

  "Arise China": {
    FlagIcon: CN,
    title: "China",
    transformOrigin: {
      horizontal: "middle",
      vertical: "top",
    },
    twMapOffset: "top-[40%] left-[60%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#cn:not(:hover)]:hidden",
  },
  "Arise Hong Kong": {
    FlagIcon: HK,
    title: "Hong Kong",
    transformOrigin: {
      horizontal: "left",
      vertical: "top",
    },
    twMapOffset: "top-[55%] left-[68.5%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#cn:not(:hover)]:hidden",
  },
  "Arise Macau": {
    FlagIcon: MO,
    title: "Macau",
    transformOrigin: {
      horizontal: "middle",
      vertical: "bottom",
    },
    twMapOffset: "top-[56%] left-[67%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#cn:not(:hover)]:hidden",
  },
  "Arise Taiwan": {
    FlagIcon: TW,
    title: "Taiwan",
    transformOrigin: {
      horizontal: "right",
      vertical: "bottom",
    },
    twMapOffset: "top-[54%] left-[75%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#tw:not(:hover)]:hidden",
  },

  "Arise Myanmar": {
    FlagIcon: MM,
    title: "Myanmar",
    transformOrigin: {
      horizontal: "middle",
      vertical: "bottom",
    },
    twMapOffset: "top-[58%] left-[50%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#mm:not(:hover)]:hidden",
  },
  "Arise Nepal": {
    FlagIcon: NP,
    title: "Nepal",
    transformOrigin: {
      horizontal: "left",
      vertical: "top",
    },
    twMapOffset: "top-[48%] left-[38%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#np:not(:hover)]:hidden",
  },
  "Arise Bhutan": {
    FlagIcon: BT,
    title: "Bhutan",
    transformOrigin: {
      horizontal: "right",
      vertical: "top",
    },
    twMapOffset: "top-[49%] left-[44.5%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#bt:not(:hover)]:hidden",
  },
  "Arise Bangladesh": {
    FlagIcon: BD,
    title: "Bangladesh",
    transformOrigin: {
      horizontal: "left",
      vertical: "bottom",
    },
    twMapOffset: "top-[53.5%] left-[44%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#bd:not(:hover)]:hidden",
  },

  "Arise Japan": {
    FlagIcon: JP,
    title: "Japan",
    transformOrigin: {
      horizontal: "right",
      vertical: "top",
    },
    twMapOffset: "top-[35%] left-[93%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#jp:not(:hover)]:hidden",
  },
  "Arise Korea": {
    FlagIcon: KR,
    title: "Korea",
    transformOrigin: {
      horizontal: "left",
      vertical: "top",
    },
    twMapOffset: "top-[35%] left-[82%]",
    twVisibility:
      "peer-has-[:hover]:peer-has-[#kp:not(:hover)]:peer-has-[#kr:not(:hover)]:hidden",
  },

  "Arise Mumbai": {
    FlagIcon: IN,
    title: "Mumbai",
    transformOrigin: {
      horizontal: "left",
      vertical: "top",
    },
    twMapOffset: "top-[65%] left-[28%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#in:not(:hover)]:hidden",
  },
  "Arise India": {
    FlagIcon: IN,
    title: "India",
    transformOrigin: {
      horizontal: "left",
      vertical: "top",
    },
    twMapOffset: "top-[52%] left-[32%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#in:not(:hover)]:hidden",
  },
  "Arise Sri Lanka": {
    FlagIcon: LK,
    title: "Sri Lanka",
    transformOrigin: {
      horizontal: "right",
      vertical: "bottom",
    },
    twMapOffset: "top-[76%] left-[34.5%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#lk:not(:hover)]:hidden",
  },

  "Arise Cambodia": {
    FlagIcon: KH,
    title: "Cambodia",
    transformOrigin: {
      horizontal: "right",
      vertical: "top",
    },
    twMapOffset: "top-[69%] left-[59%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#kh:not(:hover)]:hidden",
  },
  "Arise Thailand": {
    FlagIcon: TH,
    title: "Thailand",
    transformOrigin: {
      horizontal: "left",
      vertical: "bottom",
    },
    twMapOffset: "top-[65%] left-[55%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#th:not(:hover)]:hidden",
  },
  "Arise Vietnam": {
    FlagIcon: VN,
    title: "Vietnam",
    transformOrigin: {
      horizontal: "right",
      vertical: "bottom",
    },
    twMapOffset: "top-[68%] left-[62.3%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#vn:not(:hover)]:hidden",
  },
  "Arise Laos": {
    FlagIcon: LA,
    title: "Laos",
    transformOrigin: {
      horizontal: "right",
      vertical: "top",
    },
    twMapOffset: "top-[60%] left-[56.5%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#la:not(:hover)]:hidden",
  },

  "Arise Singapore": {
    FlagIcon: SG,
    title: "Singapore",
    transformOrigin: {
      horizontal: "middle",
      vertical: "bottom",
    },
    twMapOffset: "top-[84%] left-[58%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#sg:not(:hover)]:hidden",
  },
  "Arise Malaysia": {
    FlagIcon: MY,
    title: "Malaysia",
    transformOrigin: {
      horizontal: "middle",
      vertical: "top",
    },
    twMapOffset: "top-[81%] left-[56%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#my:not(:hover)]:hidden",
  },
  "Arise Brunei": {
    FlagIcon: BN,
    title: "Brunei",
    transformOrigin: {
      horizontal: "left",
      vertical: "top",
    },
    twMapOffset: "top-[80%] left-[68.5%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#bn:not(:hover)]:hidden",
  },
  "Arise Indonesia": {
    FlagIcon: ID,
    title: "Indonesia",
    transformOrigin: {
      horizontal: "right",
      vertical: "bottom",
    },
    twMapOffset: "top-[88%] left-[74%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#id:not(:hover)]:hidden",
  },
  "Arise Philippines": {
    FlagIcon: PH,
    title: "Philippines",
    transformOrigin: {
      horizontal: "right",
      vertical: "bottom",
    },
    twMapOffset: "top-[70%] left-[77%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#ph:not(:hover)]:hidden",
  },
};

export default mapCountryMetadataList;
