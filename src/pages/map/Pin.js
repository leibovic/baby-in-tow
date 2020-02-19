import React from "react";

const ICON_WIDTH = 30;
const ICON_SELECTED_WIDTH = 47;
const ICON_HEIGHT = 36;
const ICON_SELECTED_HEIGHT = 53;

const Pin = ({ onClick, color, selected }) => (
  <svg
    width={selected ? ICON_SELECTED_WIDTH : ICON_WIDTH}
    height={selected ? ICON_SELECTED_HEIGHT : ICON_HEIGHT}
    viewBox={
      selected
        ? `0 0 ${ICON_SELECTED_WIDTH} ${ICON_SELECTED_HEIGHT}`
        : `0 0 ${ICON_WIDTH} ${ICON_HEIGHT}`
    }
    fill="none"
    onClick={onClick}
  >
    {selected && (
      <>
        <g filter="url(#filter0_d)">
          <mask
            id="path-1-outside-1"
            maskUnits="userSpaceOnUse"
            x="4"
            y="0"
            width="39"
            height="45"
            fill="black"
          >
            <rect fill="white" x="4" width="39" height="45" />
            <path d="M36.73 19.365C36.73 29.76 23.365 38.67 23.365 38.67C23.365 38.67 10 29.76 10 19.365C10 15.8204 11.4081 12.4209 13.9145 9.91452C16.4209 7.40809 19.8204 6 23.365 6C26.9096 6 30.3091 7.40809 32.8155 9.91452C35.3219 12.4209 36.73 15.8204 36.73 19.365Z" />
          </mask>
          <path
            d="M36.73 19.365C36.73 29.76 23.365 38.67 23.365 38.67C23.365 38.67 10 29.76 10 19.365C10 15.8204 11.4081 12.4209 13.9145 9.91452C16.4209 7.40809 19.8204 6 23.365 6C26.9096 6 30.3091 7.40809 32.8155 9.91452C35.3219 12.4209 36.73 15.8204 36.73 19.365Z"
            fill="white"
          />
          <path
            d="M36.73 19.365H42.73V19.365L36.73 19.365ZM23.365 38.67L20.0368 43.6623C22.0522 45.0059 24.6778 45.0059 26.6932 43.6623L23.365 38.67ZM10 19.365L4 19.365V19.365H10ZM23.365 6V12V6ZM30.73 19.365C30.73 22.1509 28.7943 25.5143 25.6918 28.7892C24.2632 30.2971 22.8142 31.547 21.7157 32.4217C21.1712 32.8553 20.7249 33.1872 20.4263 33.4028C20.2774 33.5104 20.1661 33.5883 20.0989 33.6349C20.0653 33.6582 20.0428 33.6735 20.0322 33.6807C20.0268 33.6844 20.0245 33.6859 20.0252 33.6854C20.0256 33.6852 20.0268 33.6844 20.0287 33.6831C20.0296 33.6825 20.0308 33.6817 20.0321 33.6808C20.0328 33.6804 20.034 33.6796 20.0343 33.6794C20.0355 33.6785 20.0368 33.6777 23.365 38.67C26.6932 43.6623 26.6946 43.6614 26.696 43.6604C26.6965 43.6601 26.698 43.6591 26.6991 43.6584C26.7012 43.6569 26.7036 43.6553 26.7062 43.6536C26.7114 43.6502 26.7173 43.6461 26.7241 43.6416C26.7377 43.6324 26.7545 43.6211 26.7745 43.6075C26.8145 43.5804 26.867 43.5444 26.9313 43.4999C27.0599 43.4109 27.2357 43.2873 27.4522 43.1309C27.8846 42.8187 28.4824 42.3732 29.1908 41.8091C30.5983 40.6884 32.4905 39.061 34.4032 37.0421C37.9832 33.2633 42.73 26.9741 42.73 19.365H30.73ZM23.365 38.67C26.6932 33.6777 26.6945 33.6785 26.6957 33.6794C26.696 33.6796 26.6972 33.6804 26.6979 33.6808C26.6992 33.6817 26.7004 33.6825 26.7013 33.6831C26.7032 33.6844 26.7044 33.6852 26.7048 33.6854C26.7055 33.6859 26.7032 33.6844 26.6978 33.6807C26.6872 33.6735 26.6647 33.6582 26.6311 33.6349C26.5639 33.5883 26.4526 33.5104 26.3037 33.4028C26.0051 33.1872 25.5588 32.8553 25.0143 32.4217C23.9158 31.547 22.4668 30.2971 21.0382 28.7892C17.9357 25.5143 16 22.1509 16 19.365H4C4 26.9741 8.74683 33.2633 12.3268 37.0421C14.2395 39.061 16.1317 40.6884 17.5392 41.8091C18.2476 42.3732 18.8454 42.8187 19.2778 43.1309C19.4943 43.2873 19.6701 43.4109 19.7987 43.4999C19.863 43.5444 19.9155 43.5804 19.9555 43.6075C19.9755 43.6211 19.9923 43.6324 20.0059 43.6416C20.0127 43.6461 20.0186 43.6502 20.0238 43.6536C20.0264 43.6553 20.0288 43.6569 20.0309 43.6584C20.032 43.6591 20.0335 43.6601 20.034 43.6604C20.0354 43.6614 20.0368 43.6623 23.365 38.67ZM16 19.365C16 17.4117 16.776 15.5384 18.1572 14.1572L9.67188 5.67188C6.04023 9.30352 4 14.2291 4 19.365L16 19.365ZM18.1572 14.1572C19.5384 12.776 21.4117 12 23.365 12V0C18.2291 0 13.3035 2.04024 9.67188 5.67188L18.1572 14.1572ZM23.365 12C25.3183 12 27.1916 12.776 28.5728 14.1572L37.0581 5.67188C33.4265 2.04024 28.5009 0 23.365 0V12ZM28.5728 14.1572C29.954 15.5384 30.73 17.4117 30.73 19.365L42.73 19.365C42.73 14.2291 40.6898 9.30352 37.0581 5.67188L28.5728 14.1572Z"
            fill="white"
            mask="url(#path-1-outside-1)"
          />
        </g>
        <path
          d="M36.73 19.365C36.73 29.76 23.365 38.67 23.365 38.67C23.365 38.67 10 29.76 10 19.365C10 15.8204 11.4081 12.4209 13.9145 9.91452C16.4209 7.40809 19.8204 6 23.365 6C26.9096 6 30.3091 7.40809 32.8155 9.91452C35.3219 12.4209 36.73 15.8204 36.73 19.365Z"
          fill={color}
        />
        <path
          d="M36.73 19.365H37.73V19.365L36.73 19.365ZM23.365 38.67L22.8103 39.5021C23.1462 39.726 23.5838 39.726 23.9197 39.5021L23.365 38.67ZM10 19.365L9 19.365V19.365H10ZM23.365 6V7V6ZM35.73 19.365C35.73 24.1606 32.623 28.743 29.3215 32.2279C27.6913 33.9487 26.0576 35.3559 24.8304 36.3331C24.2175 36.8211 23.7081 37.2003 23.3538 37.4562C23.1767 37.5841 23.0385 37.6811 22.9457 37.7453C22.8993 37.7774 22.8643 37.8014 22.8415 37.8169C22.8301 37.8247 22.8217 37.8303 22.8164 37.8338C22.8138 37.8356 22.812 37.8368 22.811 37.8375C22.8105 37.8378 22.8101 37.8381 22.81 37.8381C22.81 37.8382 22.81 37.8381 22.81 37.8381C22.8101 37.8381 22.8103 37.838 23.365 38.67C23.9197 39.5021 23.92 39.5019 23.9203 39.5017C23.9205 39.5015 23.9208 39.5013 23.9212 39.5011C23.9219 39.5006 23.9228 39.5 23.9239 39.4992C23.9261 39.4978 23.9291 39.4957 23.9329 39.4932C23.9405 39.4881 23.9513 39.4808 23.9652 39.4714C23.9929 39.4525 24.033 39.4252 24.0845 39.3895C24.1875 39.3181 24.3364 39.2136 24.5248 39.0775C24.9014 38.8055 25.4361 38.4074 26.0762 37.8977C27.3549 36.8794 29.0625 35.4094 30.7735 33.6034C34.1545 30.0345 37.73 24.9644 37.73 19.365H35.73ZM23.365 38.67C23.9197 37.838 23.9199 37.8381 23.92 37.8381C23.92 37.8381 23.92 37.8382 23.92 37.8381C23.9199 37.8381 23.9195 37.8378 23.919 37.8375C23.918 37.8368 23.9162 37.8356 23.9136 37.8338C23.9083 37.8303 23.8999 37.8247 23.8885 37.8169C23.8657 37.8014 23.8307 37.7774 23.7843 37.7453C23.6915 37.6811 23.5533 37.5841 23.3762 37.4562C23.0219 37.2003 22.5125 36.8211 21.8996 36.3331C20.6724 35.3559 19.0387 33.9487 17.4085 32.2279C14.107 28.743 11 24.1606 11 19.365H9C9 24.9644 12.5755 30.0345 15.9565 33.6034C17.6675 35.4094 19.3751 36.8794 20.6538 37.8977C21.2939 38.4074 21.8286 38.8055 22.2052 39.0775C22.3936 39.2136 22.5425 39.3181 22.6455 39.3895C22.697 39.4252 22.7371 39.4525 22.7648 39.4714C22.7787 39.4808 22.7895 39.4881 22.7971 39.4932C22.8009 39.4957 22.8039 39.4978 22.8061 39.4992C22.8072 39.5 22.8081 39.5006 22.8088 39.5011C22.8092 39.5013 22.8095 39.5015 22.8097 39.5017C22.81 39.5019 22.8103 39.5021 23.365 38.67ZM11 19.365C11 16.0856 12.3027 12.9405 14.6216 10.6216L13.2074 9.20741C10.5135 11.9014 9 15.5552 9 19.365L11 19.365ZM14.6216 10.6216C16.9405 8.30274 20.0856 7 23.365 7V5C19.5552 5 15.9014 6.51345 13.2074 9.20741L14.6216 10.6216ZM23.365 7C26.6444 7 29.7895 8.30274 32.1084 10.6216L33.5226 9.20741C30.8286 6.51345 27.1748 5 23.365 5V7ZM32.1084 10.6216C34.4273 12.9405 35.73 16.0856 35.73 19.365L37.73 19.365C37.73 15.5552 36.2165 11.9014 33.5226 9.20741L32.1084 10.6216Z"
          fill="#374B5B"
        />
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="46.73"
            height="52.67"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </>
    )}

    {!selected && (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.6364 34.3333C14.6364 34.3333 28.2727 25.2424 28.2727 14.6364C28.2727 11.0198 26.836 7.55131 24.2787 4.994C21.7214 2.43668 18.253 1 14.6364 1C11.0198 1 7.55131 2.43668 4.994 4.994C2.43668 7.55131 1 11.0198 1 14.6364C1 25.2424 14.6364 34.3333 14.6364 34.3333ZM19.1818 14.6364C19.1818 17.1467 17.1467 19.1818 14.6364 19.1818C12.126 19.1818 10.0909 17.1467 10.0909 14.6364C10.0909 12.126 12.126 10.0909 14.6364 10.0909C17.1467 10.0909 19.1818 12.126 19.1818 14.6364Z"
          fill={color}
        />

        <path
          d="M28.2727 14.6364H29.2727V14.6364L28.2727 14.6364ZM14.6364 34.3333L14.0817 35.1654C14.4176 35.3893 14.8552 35.3893 15.1911 35.1654L14.6364 34.3333ZM24.2787 4.994L23.5716 5.7011L23.5716 5.70111L24.2787 4.994ZM4.994 4.994L4.28689 4.28689L4.994 4.994ZM27.2727 14.6364C27.2727 19.5375 24.0979 24.2179 20.7286 27.7744C19.0644 29.531 17.3968 30.9674 16.1441 31.9649C15.5186 32.463 14.9985 32.8501 14.6368 33.1113C14.456 33.2419 14.3149 33.3409 14.2201 33.4066C14.1728 33.4394 14.137 33.4638 14.1136 33.4797C14.1019 33.4876 14.0934 33.4934 14.088 33.497C14.0853 33.4988 14.0834 33.5001 14.0824 33.5008C14.0819 33.5012 14.0815 33.5014 14.0814 33.5015C14.0813 33.5015 14.0814 33.5014 14.0814 33.5015C14.0815 33.5014 14.0817 33.5013 14.6364 34.3333C15.1911 35.1654 15.1913 35.1652 15.1917 35.165C15.1918 35.1649 15.1922 35.1646 15.1926 35.1644C15.1933 35.1639 15.1942 35.1633 15.1953 35.1625C15.1975 35.161 15.2006 35.159 15.2045 35.1564C15.2122 35.1512 15.2232 35.1438 15.2373 35.1342C15.2656 35.115 15.3064 35.0871 15.3589 35.0507C15.4639 34.978 15.6157 34.8714 15.8078 34.7327C16.1918 34.4553 16.7371 34.0493 17.39 33.5294C18.6941 32.4909 20.4356 30.9917 22.1805 29.1499C25.6294 25.5094 29.2727 20.3413 29.2727 14.6364H27.2727ZM23.5716 5.70111C25.9414 8.07088 27.2727 11.285 27.2727 14.6364L29.2727 14.6364C29.2727 10.7546 27.7307 7.03174 24.9858 4.28689L23.5716 5.70111ZM14.6364 2C17.9877 2 21.2018 3.33133 23.5716 5.7011L24.9858 4.28689C22.241 1.54204 18.5182 0 14.6364 0V2ZM5.7011 5.70111C8.07088 3.33133 11.285 2 14.6364 2V0C10.7546 0 7.03174 1.54204 4.28689 4.28689L5.7011 5.70111ZM2 14.6364C2 11.285 3.33133 8.07088 5.70111 5.7011L4.28689 4.28689C1.54204 7.03174 0 10.7546 0 14.6364H2ZM14.6364 34.3333C15.1911 33.5013 15.1912 33.5014 15.1913 33.5015C15.1913 33.5014 15.1914 33.5015 15.1913 33.5015C15.1912 33.5014 15.1909 33.5012 15.1903 33.5008C15.1893 33.5001 15.1874 33.4988 15.1847 33.497C15.1794 33.4934 15.1708 33.4876 15.1591 33.4797C15.1358 33.4638 15.1 33.4394 15.0526 33.4066C14.9578 33.3409 14.8167 33.2419 14.6359 33.1113C14.2742 32.8501 13.7542 32.463 13.1286 31.9649C11.8759 30.9674 10.2083 29.531 8.54413 27.7744C5.17483 24.2179 2 19.5375 2 14.6364H0C0 20.3413 3.64335 25.5094 7.09223 29.1499C8.83712 30.9917 10.5786 32.4909 11.8828 33.5294C12.5356 34.0493 13.0809 34.4553 13.4649 34.7327C13.657 34.8714 13.8089 34.978 13.9139 35.0507C13.9664 35.0871 14.0071 35.115 14.0354 35.1342C14.0495 35.1438 14.0605 35.1512 14.0682 35.1564C14.0721 35.159 14.0752 35.161 14.0774 35.1625C14.0785 35.1633 14.0795 35.1639 14.0802 35.1644C14.0805 35.1646 14.0809 35.1649 14.0811 35.165C14.0814 35.1652 14.0817 35.1654 14.6364 34.3333ZM14.6364 20.1818C17.699 20.1818 20.1818 17.699 20.1818 14.6364H18.1818C18.1818 16.5945 16.5945 18.1818 14.6364 18.1818V20.1818ZM9.0909 14.6364C9.0909 17.699 11.5737 20.1818 14.6364 20.1818V18.1818C12.6783 18.1818 11.0909 16.5945 11.0909 14.6364H9.0909ZM14.6364 9.09091C11.5737 9.09091 9.0909 11.5737 9.0909 14.6364H11.0909C11.0909 12.6783 12.6783 11.0909 14.6364 11.0909V9.09091ZM20.1818 14.6364C20.1818 11.5737 17.699 9.09091 14.6364 9.09091V11.0909C16.5945 11.0909 18.1818 12.6783 18.1818 14.6364H20.1818Z"
          fill="#374B5B"
        />
      </>
    )}
  </svg>
);

export default Pin;