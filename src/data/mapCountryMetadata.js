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
    twMapOffset: "top-[54%] left-[50%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#bd:not(:hover)]:hidden",
  },
  "Arise Brunei": {
    FlagIcon: BN,
    title: "Brunei",
    transformOrigin: {
      horizontal: "right",
      vertical: "bottom",
    },
    twMapOffset: "top-[80%] left-[68.5%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#bn:not(:hover)]:hidden",
  },
  "Arise Bhutan": {
    FlagIcon: BT,
    title: "Bhutan",
    transformOrigin: {
      horizontal: "right",
      vertical: "top",
    },
    twMapOffset: "top-[49%] left-[50%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#bt:not(:hover)]:hidden",
  },
  "Arise Hong Kong": {
    FlagIcon: HK,
    title: "Hong Kong",
    transformOrigin: {
      horizontal: "right",
      vertical: "bottom",
    },
    twMapOffset: "top-[55.5%] left-[72%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#cn:not(:hover)]:hidden",
  },
  "Arise Indonesia": {
    FlagIcon: ID,
    title: "Indonesia",
    transformOrigin: {
      horizontal: "left",
      vertical: "bottom",
    },
    twMapOffset: "top-[96.5%] left-[72.5%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#id:not(:hover)]:hidden",
  },
  "Arise Mumbai": {
    FlagIcon: IN,
    title: "India",
    transformOrigin: {
      horizontal: "left",
      vertical: "top",
    },
    twMapOffset: "top-[65%] left-[36%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#in:not(:hover)]:hidden",
  },
  "Arise Japan": {
    FlagIcon: JP,
    title: "Japan",
    transformOrigin: {
      horizontal: "left",
      vertical: "bottom",
    },
    twMapOffset: "top-[36%] left-[94%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#jp:not(:hover)]:hidden",
  },
  "Arise Cambodia": {
    FlagIcon: KH,
    title: "Cambodia",
    transformOrigin: {
      horizontal: "right",
      vertical: "bottom",
    },
    twMapOffset: "top-[70%] left-[64.5%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#kh:not(:hover)]:hidden",
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
      "peer-has-[:hover]:peer-has-[#kp:not(:hover)]:peer-has-[#kr:not(:hover)]:hidden",
  },
  "Arise Laos": {
    FlagIcon: LA,
    title: "Laos",
    transformOrigin: {
      horizontal: "left",
      vertical: "top",
    },
    twMapOffset: "top-[61.5%] left-[61.5%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#la:not(:hover)]:hidden",
  },
  "Arise Sri Lanka": {
    FlagIcon: LK,
    title: "Sri Lanka",
    transformOrigin: {
      horizontal: "right",
      vertical: "bottom",
    },
    twMapOffset: "top-[76.5%] left-[41.5%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#lk:not(:hover)]:hidden",
  },
  "Arise Myanmar": {
    FlagIcon: MM,
    title: "Myanmar",
    transformOrigin: {
      horizontal: "left",
      vertical: "bottom",
    },
    twMapOffset: "top-[63.5%] left-[55.5%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#mm:not(:hover)]:hidden",
  },
  "Arise Mongolia": {
    FlagIcon: MN,
    title: "Mongolia",
    transformOrigin: {
      horizontal: "middle",
      vertical: "top",
    },
    twMapOffset: "top-[18%] left-[64%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#mn:not(:hover)]:hidden",
  },
  "Arise Macau": {
    FlagIcon: MO,
    title: "Macau",
    transformOrigin: {
      horizontal: "left",
      vertical: "top",
    },
    twMapOffset: "top-[56%] left-[71%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#cn:not(:hover)]:hidden",
  },
  "Arise Malaysia": {
    FlagIcon: MY,
    title: "Malaysia",
    transformOrigin: {
      horizontal: "left",
      vertical: "top",
    },
    twMapOffset: "top-[81%] left-[60.5%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#my:not(:hover)]:hidden",
  },
  "Arise Nepal": {
    FlagIcon: NP,
    title: "Nepal",
    transformOrigin: {
      horizontal: "left",
      vertical: "top",
    },
    twMapOffset: "top-[48.8%] left-[46%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#np:not(:hover)]:hidden",
  },
  "Arise Philippines": {
    FlagIcon: PH,
    title: "Philippines",
    transformOrigin: {
      horizontal: "right",
      vertical: "top",
    },
    twMapOffset: "top-[70%] left-[80%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#ph:not(:hover)]:hidden",
  },
  "Arise Singapore": {
    FlagIcon: SG,
    title: "Singapore",
    transformOrigin: {
      horizontal: "middle",
      vertical: "bottom",
    },
    twMapOffset: "top-[84%] left-[63%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#sg:not(:hover)]:hidden",
  },
  "Arise Thailand": {
    FlagIcon: TH,
    title: "Thailand",
    transformOrigin: {
      horizontal: "left",
      vertical: "bottom",
    },
    twMapOffset: "top-[68%] left-[54%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#th:not(:hover)]:hidden",
  },
  "Arise Vietnam": {
    FlagIcon: VN,
    title: "Vietnam",
    transformOrigin: {
      horizontal: "right",
      vertical: "bottom",
    },
    twMapOffset: "top-[59.5%] left-[64%]",
    twVisibility: "peer-has-[:hover]:peer-has-[#vn:not(:hover)]:hidden",
  },
};

export default mapCountryMetadataList;
