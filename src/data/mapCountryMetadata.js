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
  "Arise Hong Kong": {
    FlagIcon: HK,
    title: "Hong Kong",
    transformOrigin: {
      horizontal: "left",
      vertical: "top",
    },
    twMapOffset: "top-[25%] left-[20%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#cn:not(:hover)]:hidden",
  },
  "Arise Indonesia": {
    FlagIcon: ID,
    title: "Indonesia",
    transformOrigin: {
      horizontal: "right",
      vertical: "bottom",
    },
    twMapOffset: "top-[25%] left-[30%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#id:not(:hover)]:hidden",
  },
  "Arise Myanmar": {
    FlagIcon: MM,
    title: "Myanmar",
    transformOrigin: {
      horizontal: "middle",
      vertical: "top",
    },
    twMapOffset: "top-[25%] left-[50%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#mm:not(:hover)]:hidden",
  },
  "Arise Nepal": {
    FlagIcon: NP,
    title: "Nepal",
    transformOrigin: {
      horizontal: "left",
      vertical: "bottom",
    },
    twMapOffset: "top-[25%] left-[70%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#np:not(:hover)]:hidden",
  },
  "Arise Mongolia": {
    FlagIcon: MN,
    title: "Mongolia",
    transformOrigin: {
      horizontal: "middle",
      vertical: "top",
    },
    twMapOffset: "top-[20%] left-[57%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#mn:not(:hover)]:hidden",
  },
  "Arise Bangladesh": {
    FlagIcon: BD,
    title: "Bangladesh",
    transformOrigin: {
      horizontal: "left",
      vertical: "bottom",
    },
    twMapOffset: "top-[40%] left-[20%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#bd:not(:hover)]:hidden",
  },
  "Arise Japan": {
    FlagIcon: JP,
    title: "Japan",
    transformOrigin: {
      horizontal: "right",
      vertical: "top",
    },
    twMapOffset: "top-[40%] left-[30%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#jp:not(:hover)]:hidden",
  },
  "Arise Macau": {
    FlagIcon: MO,
    title: "Macau",
    transformOrigin: {
      horizontal: "middle",
      vertical: "bottom",
    },
    twMapOffset: "top-[40%] left-[50%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#cn:not(:hover)]:hidden",
  },
  "Arise Mumbai": {
    FlagIcon: IN,
    title: "India",
    transformOrigin: {
      horizontal: "left",
      vertical: "top",
    },
    twMapOffset: "top-[40%] left-[70%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#in:not(:hover)]:hidden",
  },
  "Arise Sri Lanka": {
    FlagIcon: LK,
    title: "Sri Lanka",
    transformOrigin: {
      horizontal: "right",
      vertical: "bottom",
    },
    twMapOffset: "top-[40%] left-[80%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#lk:not(:hover)]:hidden",
  },
  "Arise Cambodia": {
    FlagIcon: KH,
    title: "Cambodia",
    transformOrigin: {
      horizontal: "left",
      vertical: "top",
    },
    twMapOffset: "top-[55%] left-[20%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#kh:not(:hover)]:hidden",
  },
  "Arise Philippines": {
    FlagIcon: PH,
    title: "Philippines",
    transformOrigin: {
      horizontal: "right",
      vertical: "bottom",
    },
    twMapOffset: "top-[55%] left-[30%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#ph:not(:hover)]:hidden",
  },
  "Arise Singapore": {
    FlagIcon: SG,
    title: "Singapore",
    transformOrigin: {
      horizontal: "middle",
      vertical: "top",
    },
    twMapOffset: "top-[55%] left-[50%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#sg:not(:hover)]:hidden",
  },
  "Arise Vietnam": {
    FlagIcon: VN,
    title: "Vietnam",
    transformOrigin: {
      horizontal: "left",
      vertical: "bottom",
    },
    twMapOffset: "top-[55%] left-[70%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#vn:not(:hover)]:hidden",
  },
  "Arise India": {
    FlagIcon: IN,
    title: "India",
    transformOrigin: {
      horizontal: "right",
      vertical: "top",
    },
    twMapOffset: "top-[55%] left-[80%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#in:not(:hover)]:hidden",
  },
  "Arise Bhutan": {
    FlagIcon: BT,
    title: "Bhutan",
    transformOrigin: {
      horizontal: "left",
      vertical: "bottom",
    },
    twMapOffset: "top-[70%] left-[20%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#bt:not(:hover)]:hidden",
  },
  "Arise Laos": {
    FlagIcon: LA,
    title: "Laos",
    transformOrigin: {
      horizontal: "right",
      vertical: "top",
    },
    twMapOffset: "top-[70%] left-[30%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#la:not(:hover)]:hidden",
  },
  "Arise Malaysia": {
    FlagIcon: MY,
    title: "Malaysia",
    transformOrigin: {
      horizontal: "middle",
      vertical: "bottom",
    },
    twMapOffset: "top-[70%] left-[50%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#my:not(:hover)]:hidden",
  },
  "Arise Brunei": {
    FlagIcon: BN,
    title: "Brunei",
    transformOrigin: {
      horizontal: "left",
      vertical: "top",
    },
    twMapOffset: "top-[70%] left-[70%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#bn:not(:hover)]:hidden",
  },
  "Arise China": {
    FlagIcon: CN,
    title: "China",
    transformOrigin: {
      horizontal: "middle",
      vertical: "top",
    },
    twMapOffset: "top-[50%] left-[70%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#cn:not(:hover)]:hidden",
  },
  "Arise Korea": {
    FlagIcon: KR,
    title: "Korea",
    transformOrigin: {
      horizontal: "right",
      vertical: "bottom",
    },
    twMapOffset: "top-[70%] left-[80%]",
    twVisibility:
      "peer-has-[:hover]:peer-has-[#kp:not(:hover)]:peer-has-[#kr:not(:hover)]:hidden",
  },
  "Arise Thailand": {
    FlagIcon: TH,
    title: "Thailand",
    transformOrigin: {
      horizontal: "left",
      vertical: "bottom",
    },
    twMapOffset: "top-[80%] left-[40%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#th:not(:hover)]:hidden",
  },
  "Arise Taiwan": {
    FlagIcon: TW,
    title: "Taiwan",
    transformOrigin: {
      horizontal: "right",
      vertical: "bottom",
    },
    twMapOffset: "top-[80%] left-[60%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#tw:not(:hover)]:hidden",
  },
};

export default mapCountryMetadataList;
