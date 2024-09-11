import {
  BD,
  BN,
  BT,
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
  "Arise Bangladesh": {
    FlagIcon: BD,
    title: "Bangladesh",
    transformOrigin: {
      horizontal: "left",
      vertical: "bottom",
    },
    twMapOffset: "top-[54%] left-[44%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#bd:not(:hover)]:opacity-50",
  },
  "Arise Brunei": {
    FlagIcon: BN,
    title: "Brunei",
    transformOrigin: {
      horizontal: "right",
      vertical: "bottom",
    },
    twMapOffset: "top-[80%] left-[68.5%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#bn:not(:hover)]:opacity-50",
  },
  "Arise Bhutan": {
    FlagIcon: BT,
    title: "Bhutan",
    transformOrigin: {
      horizontal: "right",
      vertical: "top",
    },
    twMapOffset: "top-[49%] left-[44%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#bt:not(:hover)]:opacity-50",
  },
  "Arise Hong Kong": {
    FlagIcon: HK,
    title: "Hong Kong",
    transformOrigin: {
      horizontal: "right",
      vertical: "bottom",
    },
    twMapOffset: "top-[56%] left-[68%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#cn:not(:hover)]:opacity-50",
  },
  "Arise Indonesia": {
    FlagIcon: ID,
    title: "Indonesia",
    transformOrigin: {
      horizontal: "left",
      vertical: "bottom",
    },
    twMapOffset: "top-[94%] left-[61%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#id:not(:hover)]:opacity-50",
  },
  "Arise Mumbai": {
    FlagIcon: IN,
    title: "India",
    transformOrigin: {
      horizontal: "left",
      vertical: "top",
    },
    twMapOffset: "top-[65%] left-[28%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#in:not(:hover)]:opacity-50",
  },
  "Arise Japan": {
    FlagIcon: JP,
    title: "Japan",
    transformOrigin: {
      horizontal: "left",
      vertical: "bottom",
    },
    twMapOffset: "top-[36%] left-[94%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#jp:not(:hover)]:opacity-50",
  },
  "Arise Cambodia": {
    FlagIcon: KH,
    title: "Cambodia",
    transformOrigin: {
      horizontal: "right",
      vertical: "bottom",
    },
    twMapOffset: "top-[70%] left-[60%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#kh:not(:hover)]:opacity-50",
  },
  "Arise Korea": {
    FlagIcon: KR,
    title: "Korea",
    transformOrigin: {
      horizontal: "right",
      vertical: "top",
    },
    twMapOffset: "top-[34%] left-[81%]",
    twVisibility:
      "peer-has-[:hover]:peer-has-[#kp:not(:hover)]:peer-has-[#kr:not(:hover)]:opacity-50",
  },
  "Arise Laos": {
    FlagIcon: LA,
    title: "Laos",
    transformOrigin: {
      horizontal: "left",
      vertical: "top",
    },
    twMapOffset: "top-[61.5%] left-[56.5%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#la:not(:hover)]:opacity-50",
  },
  "Arise Sri Lanka": {
    FlagIcon: LK,
    title: "Sri Lanka",
    transformOrigin: {
      horizontal: "right",
      vertical: "bottom",
    },
    twMapOffset: "top-[77%] left-[34%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#lk:not(:hover)]:opacity-50",
  },
  "Arise Myanmar": {
    FlagIcon: MM,
    title: "Myanmar",
    transformOrigin: {
      horizontal: "left",
      vertical: "bottom",
    },
    twMapOffset: "top-[64%] left-[50%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#mm:not(:hover)]:opacity-50",
  },
  "Arise Mongolia": {
    FlagIcon: MN,
    title: "Mongolia",
    transformOrigin: {
      horizontal: "middle",
      vertical: "top",
    },
    twMapOffset: "top-[18%] left-[60%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#mn:not(:hover)]:opacity-50",
  },
  "Arise Macau": {
    FlagIcon: MO,
    title: "Macau",
    transformOrigin: {
      horizontal: "left",
      vertical: "top",
    },
    twMapOffset: "top-[56%] left-[67%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#cn:not(:hover)]:opacity-50",
  },
  "Arise Malaysia": {
    FlagIcon: MY,
    title: "Malaysia",
    transformOrigin: {
      horizontal: "left",
      vertical: "top",
    },
    twMapOffset: "top-[82%] left-[55.5%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#my:not(:hover)]:opacity-50",
  },
  "Arise Nepal": {
    FlagIcon: NP,
    title: "Nepal",
    transformOrigin: {
      horizontal: "left",
      vertical: "top",
    },
    twMapOffset: "top-[48.8%] left-[39%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#np:not(:hover)]:opacity-50",
  },
  "Arise Philippines": {
    FlagIcon: PH,
    title: "Philippines",
    transformOrigin: {
      horizontal: "right",
      vertical: "top",
    },
    twMapOffset: "top-[70%] left-[78%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#ph:not(:hover)]:opacity-50",
  },
  "Arise Singapore": {
    FlagIcon: SG,
    title: "Singapore",
    transformOrigin: {
      horizontal: "middle",
      vertical: "bottom",
    },
    twMapOffset: "top-[84%] left-[58%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#sg:not(:hover)]:opacity-50",
  },
  "Arise Thailand": {
    FlagIcon: TH,
    title: "Thailand",
    transformOrigin: {
      horizontal: "left",
      vertical: "bottom",
    },
    twMapOffset: "top-[68%] left-[54%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#th:not(:hover)]:opacity-50",
  },
  "Arise Taiwan": {
    FlagIcon: TW,
    title: "Taiwan",
    transformOrigin: {
      horizontal: "right",
      vertical: "top",
    },
    twMapOffset: "top-[54%] left-[75%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#tw:not(:hover)]:opacity-50",
  },
  "Arise Vietnam": {
    FlagIcon: VN,
    title: "Vietnam",
    transformOrigin: {
      horizontal: "right",
      vertical: "bottom",
    },
    twMapOffset: "top-[59.5%] left-[59.5%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#vn:not(:hover)]:opacity-50",
  },
};

export default mapCountryMetadataList;
