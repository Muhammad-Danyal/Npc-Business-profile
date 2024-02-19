import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='pt-10 mr-10  lg:flex'>
        <div className="side-panel">
            <div className="flex pl-28 ">
               <svg
    width="100px"
    height="100px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <path
      d="M15.7427 10.5085C15.8056 7.3485 11.0056 7.78279 12.2399 2.28564C12.2399 2.28564 9.01703 3.55422 9.58275 7.44564C9.77703 8.78279 9.30846 9.78279 9.30846 9.78279C8.83418 9.87993 8.09703 8.93707 8.35417 7.47993C8.35417 7.47993 6.66275 8.74279 6.66275 10.3656C6.66275 11.9885 7.4456 13.7085 7.4456 13.7085C5.49703 13.2856 5.69132 10.6571 5.69132 10.6571C5.69132 10.6571 4.45703 12.3085 4.45703 15.4228C4.45703 17.8456 7.18846 21.7142 11.5942 21.7142C15.9999 21.7142 19.537 18.2971 19.537 15.2571C19.537 13.9256 19.0856 12.2056 18.1085 11.2685C18.1085 11.2685 18.2399 13.9256 16.9256 13.7999C16.9256 13.7999 18.0113 10.3314 16.8742 8.74279C16.8742 8.74279 16.3256 10.4571 15.7427 10.5085Z"
      fill="url(#paint0_linear)"
    />
    <path
      d="M15.7484 8.12591C17.0283 5.76591 13.8569 5.4402 13.8512 3.98877C13.8512 3.98877 13.2912 5.48591 14.6284 6.50877C15.7198 7.33734 15.7484 8.12591 15.7484 8.12591Z"
      fill="url(#paint1_linear)"
    />
    <path
      d="M9.017 3.61133C8.53128 4.09133 9.19986 6.07419 7.67986 6.85704C7.67986 6.85704 7.16557 4.6799 9.017 3.61133Z"
      fill="url(#paint2_linear)"
    />
    <path
      opacity={0.5}
      d="M5.45703 11.4513C5.03417 12.1771 4.45703 13.5199 4.45703 15.4228C4.45703 17.5485 7.1656 21.4571 11.5942 21.4571C15.9199 21.4571 19.2799 18.1256 19.2799 15.2628C19.2799 14.2285 18.9942 12.9085 18.3599 11.9713C18.3142 12.5599 18.1713 13.3599 17.7313 13.7771C17.5027 13.9942 17.217 14.0913 16.9027 14.0571L16.5827 14.0285L16.6799 13.7256C16.6913 13.6971 17.5199 10.9885 16.9199 9.38277C16.6799 9.97134 16.2685 10.7313 15.7656 10.7713L15.4799 10.7942L15.4856 10.5085C15.5085 9.32562 14.7827 8.69705 13.9427 7.97134C12.7427 6.93134 11.3885 5.7542 11.8856 2.76562C11.0513 3.25705 9.42846 4.61134 9.83417 7.40562C10.0399 8.80562 9.55417 9.84562 9.53703 9.89134L9.47989 10.0113L9.35417 10.0342C9.11417 10.0799 8.86274 9.98277 8.63417 9.76562C8.3256 9.46277 8.0456 8.89134 8.03417 8.1142C7.5656 8.5942 6.91989 9.42277 6.91989 10.3656C6.91989 11.9142 7.67417 13.5828 7.67989 13.5999L7.89132 14.0685L7.38846 13.9599C6.07417 13.6742 5.58275 12.4513 5.45703 11.4513Z"
      fill="url(#paint3_linear)"
    />
    <path
      d="M13.8513 3.98877C13.737 4.85163 14.0799 6.09163 14.6284 6.50877C15.1313 6.89163 15.697 7.54877 15.7427 8.12591C16.5999 6.44591 15.3941 5.82306 14.7027 5.57734C14.4113 5.47448 13.8741 4.87448 13.8513 3.98877Z"
      fill="url(#paint4_radial)"
    />
    <path
      d="M11.2171 3.74316C9.32 6.71459 11.7829 9.85174 10.5143 11.7317C9.24572 13.6117 7.96 11.8746 7.87429 10.6974C7.87429 10.6974 7.88572 14.5032 9.76572 16.006C11.6457 17.5089 6.14857 17.1832 5.39429 15.3489C5.39429 15.3489 5.39429 21.4574 11.5943 21.4574C17.7943 21.4574 18.8286 15.7717 18.8286 15.7717C18.8286 15.7717 16.5714 17.6974 15.0686 16.1946C15.0686 16.1946 16.1943 14.2232 16.48 12.2003C16.48 12.2003 15.7029 12.6917 14.5086 12.5032C14.5086 12.5032 15.1714 9.66316 13.8171 8.73174C12.08 7.53745 10.6114 4.69174 11.2171 3.74316Z"
      fill="url(#paint5_linear)"
    />
    <path
      d="M11.6914 7.23975C10.6971 8.54832 12.6343 11.9083 10.6 13.2397C9.47427 13.9769 8.82856 13.0912 8.82856 13.0912C8.82856 13.0912 9.13142 14.4512 10.3428 15.6626C11.5543 16.874 8.51999 18.514 6.05713 16.394C6.05713 16.394 6.90284 21.4855 12.6343 20.6283C18.96 19.6855 18.4914 14.9826 18.4914 14.9826C18.4914 14.9826 16.7771 17.6797 14.3371 16.3883C14.3371 16.3883 15.8743 14.2455 15.8743 13.0169C15.8743 13.0169 14.8343 13.634 13.6457 13.0397C13.6457 13.0397 14.2114 10.1826 13.5371 9.75403C11.92 8.71975 11.6914 7.23975 11.6914 7.23975Z"
      fill="url(#paint6_linear)"
    />
    <path
      opacity={0.5}
      d="M15.7427 10.5085C15.8056 7.3485 11.0056 7.78279 12.2399 2.28564C12.2399 2.28564 9.01703 3.55422 9.58275 7.44564C9.77703 8.78279 9.30846 9.78279 9.30846 9.78279C8.83418 9.87993 8.09703 8.93707 8.35417 7.47993C8.35417 7.47993 6.66275 8.74279 6.66275 10.3656C6.66275 11.9885 7.4456 13.7085 7.4456 13.7085C5.49703 13.2856 5.69132 10.6571 5.69132 10.6571C5.69132 10.6571 4.45703 12.3085 4.45703 15.4228C4.45703 17.8456 7.18846 21.7142 11.5942 21.7142C15.9999 21.7142 19.537 18.2971 19.537 15.2571C19.537 13.9256 19.0856 12.2056 18.1085 11.2685C18.1085 11.2685 18.2399 13.9256 16.9256 13.7999C16.9256 13.7999 18.0113 10.3314 16.8742 8.74279C16.8742 8.74279 16.3256 10.4571 15.7427 10.5085Z"
      fill="url(#paint7_radial)"
    />
    <path
      opacity={0.5}
      d="M15.7427 10.5085C15.8056 7.3485 11.0056 7.78279 12.2399 2.28564C12.2399 2.28564 9.01703 3.55422 9.58275 7.44564C9.77703 8.78279 9.30846 9.78279 9.30846 9.78279C8.83418 9.87993 8.09703 8.93707 8.35417 7.47993C8.35417 7.47993 6.66275 8.74279 6.66275 10.3656C6.66275 11.9885 7.4456 13.7085 7.4456 13.7085C5.49703 13.2856 5.69132 10.6571 5.69132 10.6571C5.69132 10.6571 4.45703 12.3085 4.45703 15.4228C4.45703 17.8456 7.18846 21.7142 11.5942 21.7142C15.9999 21.7142 19.537 18.2971 19.537 15.2571C19.537 13.9256 19.0856 12.2056 18.1085 11.2685C18.1085 11.2685 18.2399 13.9256 16.9256 13.7999C16.9256 13.7999 18.0113 10.3314 16.8742 8.74279C16.8742 8.74279 16.3256 10.4571 15.7427 10.5085Z"
      fill="url(#paint8_radial)"
    />
    <path
      d="M4.8457 14.0971C4.97713 17.3256 7.63427 21.1942 11.7886 21.1942C15.9428 21.1942 18.0171 16.8114 18.1486 14.2456C18.1486 14.2456 17.3714 15.7542 15.6171 16.0571C13.8628 16.3599 15.7371 13.0399 14.5086 11.0742C14.5086 11.0742 13.4228 14.4971 11.88 14.6228C10.3371 14.7485 9.02856 12.3599 9.02856 11.0742C9.02856 11.0742 8.07999 13.3885 8.31427 15.2285C8.67427 18.0228 4.8457 14.0971 4.8457 14.0971Z"
      fill="url(#paint9_radial)"
    />
    <path
      opacity={0.5}
      d="M15.7427 10.5085C15.8056 7.3485 11.0056 7.78279 12.2399 2.28564C12.2399 2.28564 9.01703 3.55422 9.58275 7.44564C9.77703 8.78279 9.30846 9.78279 9.30846 9.78279C8.83418 9.87993 8.09703 8.93707 8.35417 7.47993C8.35417 7.47993 6.66275 8.74279 6.66275 10.3656C6.66275 11.9885 7.4456 13.7085 7.4456 13.7085C5.49703 13.2856 5.69132 10.6571 5.69132 10.6571C5.69132 10.6571 4.45703 12.3085 4.45703 15.4228C4.45703 17.8456 7.18846 21.7142 11.5942 21.7142C15.9999 21.7142 19.537 18.2971 19.537 15.2571C19.537 13.9256 19.0856 12.2056 18.1085 11.2685C18.1085 11.2685 18.2399 13.9256 16.9256 13.7999C16.9256 13.7999 18.0113 10.3314 16.8742 8.74279C16.8742 8.74279 16.3256 10.4571 15.7427 10.5085Z"
      fill="url(#paint10_radial)"
    />
    <path
      opacity={0.5}
      d="M15.7484 8.12591C17.0283 5.76591 13.8569 5.4402 13.8512 3.98877C13.8512 3.98877 13.2912 5.48591 14.6284 6.50877C15.7198 7.33734 15.7484 8.12591 15.7484 8.12591Z"
      fill="url(#paint11_radial)"
    />
    <path
      d="M9.017 3.61133C8.537 4.09133 8.84557 5.60561 7.67986 6.85704C7.67986 6.85704 7.16557 4.6799 9.017 3.61133Z"
      fill="url(#paint12_radial)"
    />
    <path
      opacity={0.5}
      d="M9.017 3.61133C8.53128 4.09133 9.19986 6.07419 7.67986 6.85704C7.67986 6.85704 7.16557 4.6799 9.017 3.61133Z"
      fill="url(#paint13_radial)"
    />
    <path
      opacity={0.5}
      d="M15.7427 10.5085C15.8056 7.3485 11.0056 7.78279 12.2399 2.28564C12.2399 2.28564 9.01703 3.55422 9.58275 7.44564C9.77703 8.78279 9.30846 9.78279 9.30846 9.78279C8.83418 9.87993 8.09703 8.93707 8.35417 7.47993C8.35417 7.47993 6.66275 8.74279 6.66275 10.3656C6.66275 11.9885 7.4456 13.7085 7.4456 13.7085C5.49703 13.2856 5.69132 10.6571 5.69132 10.6571C5.69132 10.6571 4.45703 12.3085 4.45703 15.4228C4.45703 17.8456 7.18846 21.7142 11.5942 21.7142C15.9999 21.7142 19.537 18.2971 19.537 15.2571C19.537 13.9256 19.0856 12.2056 18.1085 11.2685C18.1085 11.2685 18.2399 13.9256 16.9256 13.7999C16.9256 13.7999 18.0113 10.3314 16.8742 8.74279C16.8742 8.74279 16.3256 10.4571 15.7427 10.5085Z"
      fill="url(#paint14_radial)"
    />
    <path
      opacity={0.25}
      d="M15.7427 10.5085C15.8056 7.3485 11.0056 7.78279 12.2399 2.28564C12.2399 2.28564 9.01703 3.55422 9.58275 7.44564C9.77703 8.78279 9.30846 9.78279 9.30846 9.78279C8.83418 9.87993 8.09703 8.93707 8.35417 7.47993C8.35417 7.47993 6.66275 8.74279 6.66275 10.3656C6.66275 11.9885 7.4456 13.7085 7.4456 13.7085C5.49703 13.2856 5.69132 10.6571 5.69132 10.6571C5.69132 10.6571 4.45703 12.3085 4.45703 15.4228C4.45703 17.8456 7.18846 21.7142 11.5942 21.7142C15.9999 21.7142 19.537 18.2971 19.537 15.2571C19.537 13.9256 19.0856 12.2056 18.1085 11.2685C18.1085 11.2685 18.2399 13.9256 16.9256 13.7999C16.9256 13.7999 18.0113 10.3314 16.8742 8.74279C16.8742 8.74279 16.3256 10.4571 15.7427 10.5085Z"
      fill="url(#paint15_radial)"
    />
    <path
      opacity={0.25}
      d="M15.7427 10.5085C15.8056 7.3485 11.0056 7.78279 12.2399 2.28564C12.2399 2.28564 9.01703 3.55422 9.58275 7.44564C9.77703 8.78279 9.30846 9.78279 9.30846 9.78279C8.83418 9.87993 8.09703 8.93707 8.35417 7.47993C8.35417 7.47993 6.66275 8.74279 6.66275 10.3656C6.66275 11.9885 7.4456 13.7085 7.4456 13.7085C5.49703 13.2856 5.69132 10.6571 5.69132 10.6571C5.69132 10.6571 4.45703 12.3085 4.45703 15.4228C4.45703 17.8456 7.18846 21.7142 11.5942 21.7142C15.9999 21.7142 19.537 18.2971 19.537 15.2571C19.537 13.9256 19.0856 12.2056 18.1085 11.2685C18.1085 11.2685 18.2399 13.9256 16.9256 13.7999C16.9256 13.7999 18.0113 10.3314 16.8742 8.74279C16.8742 8.74279 16.3256 10.4571 15.7427 10.5085Z"
      fill="url(#paint16_radial)"
    />
    <path
      opacity={0.25}
      d="M15.7427 10.5085C15.8056 7.3485 11.0056 7.78279 12.2399 2.28564C12.2399 2.28564 9.01703 3.55422 9.58275 7.44564C9.77703 8.78279 9.30846 9.78279 9.30846 9.78279C8.83418 9.87993 8.09703 8.93707 8.35417 7.47993C8.35417 7.47993 6.66275 8.74279 6.66275 10.3656C6.66275 11.9885 7.4456 13.7085 7.4456 13.7085C5.49703 13.2856 5.69132 10.6571 5.69132 10.6571C5.69132 10.6571 4.45703 12.3085 4.45703 15.4228C4.45703 17.8456 7.18846 21.7142 11.5942 21.7142C15.9999 21.7142 19.537 18.2971 19.537 15.2571C19.537 13.9256 19.0856 12.2056 18.1085 11.2685C18.1085 11.2685 18.2399 13.9256 16.9256 13.7999C16.9256 13.7999 18.0113 10.3314 16.8742 8.74279C16.8742 8.74279 16.3256 10.4571 15.7427 10.5085Z"
      fill="url(#paint17_radial)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1={12.9634}
        y1={22.2512}
        x2={9.46041}
        y2={-3.13459}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF0000" />
        <stop offset={0.2317} stopColor="#FF1500" />
        <stop offset={0.7367} stopColor="#FF3D00" />
        <stop offset={0.9987} stopColor="#FF4C00" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1={17.068}
        y1={21.6851}
        x2={13.565}
        y2={-3.70073}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF0000" />
        <stop offset={0.2317} stopColor="#FF1500" />
        <stop offset={0.7367} stopColor="#FF3D00" />
        <stop offset={0.9987} stopColor="#FF4C00" />
      </linearGradient>
      <linearGradient
        id="paint2_linear"
        x1={10.7347}
        y1={22.5587}
        x2={7.2317}
        y2={-2.82709}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF0000" />
        <stop offset={0.2317} stopColor="#FF1500" />
        <stop offset={0.7367} stopColor="#FF3D00" />
        <stop offset={0.9987} stopColor="#FF4C00" />
      </linearGradient>
      <linearGradient
        id="paint3_linear"
        x1={12.869}
        y1={17.927}
        x2={5.21432}
        y2={-3.9342}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF8000" />
        <stop offset={0.6388} stopColor="#FF5B00" />
        <stop offset={0.9987} stopColor="#FF4C00" />
      </linearGradient>
      <radialGradient
        id="paint4_radial"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(16.1473 0.135867) scale(10.2006)"
      >
        <stop offset={0.00134333} stopColor="#FFED1C" stopOpacity={0.6} />
        <stop offset={0.9477} stopColor="#FFED1C" stopOpacity={0.0264782} />
        <stop offset={0.9914} stopColor="#FFED1C" stopOpacity={0} />
      </radialGradient>
      <linearGradient
        id="paint5_linear"
        x1={9.89669}
        y1={3.33922}
        x2={12.6645}
        y2={18.8648}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF8000" />
        <stop offset={0.022669} stopColor="#FE7F02" stopOpacity={0.9773} />
        <stop offset={0.6663} stopColor="#ED582A" stopOpacity={0.3337} />
        <stop offset={1} stopColor="#E74939" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint6_linear"
        x1={12.046}
        y1={20.1156}
        x2={12.6442}
        y2={9.21433}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFBC47" />
        <stop offset={0.1869} stopColor="#FFB137" stopOpacity={0.8131} />
        <stop offset={0.7223} stopColor="#FF940F" stopOpacity={0.2777} />
        <stop offset={1} stopColor="#FF8900" stopOpacity={0} />
      </linearGradient>
      <radialGradient
        id="paint7_radial"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(11.8972 17.1739) scale(7.89073 6.40569)"
      >
        <stop offset={0.00134333} stopColor="#FFBC47" />
        <stop offset={0.2941} stopColor="#FFBF4B" stopOpacity={0.7068} />
        <stop offset={0.5624} stopColor="#FEC656" stopOpacity={0.4382} />
        <stop offset={0.8201} stopColor="#FCD368" stopOpacity={0.1801} />
        <stop offset={1} stopColor="#FBE07A" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="paint8_radial"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(11.8972 16.8495) scale(7.64758 6.2083)"
      >
        <stop offset={0.00134333} stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="paint9_radial"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(8.54394 18.2601) scale(9.39451 10.938)"
      >
        <stop offset={0.00134333} stopColor="#FFED1C" stopOpacity={0.6} />
        <stop offset={0.9477} stopColor="#FFED1C" stopOpacity={0.0264782} />
        <stop offset={0.9914} stopColor="#FFED1C" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="paint10_radial"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(11.8976 16.8487) rotate(92.8876) scale(2.96912 2.4102)"
      >
        <stop offset={0.00134333} stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="paint11_radial"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(13.5387 3.98335) scale(3.37018)"
      >
        <stop offset={0.00134333} stopColor="#FFED1C" />
        <stop offset={0.1997} stopColor="#FFEE2B" stopOpacity={0.8013} />
        <stop offset={0.5839} stopColor="#FFF254" stopOpacity={0.4167} />
        <stop offset={1} stopColor="#FFF686" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="paint12_radial"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(7.98155 5.60476) rotate(-56.4116) scale(2.72992 0.619975)"
      >
        <stop offset={0.00134333} stopColor="#FFED1C" stopOpacity={0.6} />
        <stop offset={0.9477} stopColor="#FFED1C" stopOpacity={0.0264782} />
        <stop offset={0.9914} stopColor="#FFED1C" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="paint13_radial"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(8.52218 3.46406) rotate(95.0573) scale(2.45297 0.987001)"
      >
        <stop offset={0.00134333} stopColor="#FFED1C" />
        <stop offset={0.1997} stopColor="#FFEE2B" stopOpacity={0.8013} />
        <stop offset={0.5839} stopColor="#FFF254" stopOpacity={0.4167} />
        <stop offset={1} stopColor="#FFF686" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="paint14_radial"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(12.79 3.55061) scale(10.516)"
      >
        <stop offset={0.00134333} stopColor="#FF4C00" />
        <stop offset={0.135} stopColor="#FF5B0C" stopOpacity={0.8661} />
        <stop offset={0.3941} stopColor="#FF842C" stopOpacity={0.6067} />
        <stop offset={0.7491} stopColor="#FFC45F" stopOpacity={0.2512} />
        <stop offset={1} stopColor="#FFF686" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="paint15_radial"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(17.5729 12.0702) scale(5.58172)"
      >
        <stop offset={0.00134333} stopColor="#FFED1C" />
        <stop offset={0.1997} stopColor="#FFEE2B" stopOpacity={0.8013} />
        <stop offset={0.5839} stopColor="#FFF254" stopOpacity={0.4167} />
        <stop offset={1} stopColor="#FFF686" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="paint16_radial"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(6.147 14.0596) scale(5.9494)"
      >
        <stop offset={0.00134333} stopColor="#FFED1C" />
        <stop offset={0.1997} stopColor="#FFEE2B" stopOpacity={0.8013} />
        <stop offset={0.5839} stopColor="#FFF254" stopOpacity={0.4167} />
        <stop offset={1} stopColor="#FFF686" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="paint17_radial"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(11.8084 12.8571) rotate(86.1102) scale(10.1909 6.19501)"
      >
        <stop stopColor="#FF4C00" stopOpacity={0} />
        <stop offset={0.9874} stopColor="#FF4C00" stopOpacity={0.9888} />
        <stop offset={0.9987} stopColor="#FF4C00" />
      </radialGradient>
    </defs>
               </svg>
                <h1 className='text-orange font-medium	pt-10 text-5xl '>About Us</h1>
            </div> <br></br><br></br><br></br>
            <div className="">
                <h4 className="text-orange font-medium leading-tight text-4xl pl-28">How we <br></br> Works</h4>
            </div>
            <div className="Description text-orange pl-28 pt-5">
                <p>Our agency operates at the forefront of technology, employing advanced natural language processing based on the GPT-3.5 architecture. We utilize vast datasets to generate tailored, contextually relevant content that resonates with target audiences. Through strategic implementation and continuous refinement, we deliver effective communication solutions that align seamlessly with the goals and objectives of our clients.</p>
            </div>
        </div>

        <div className="h-20 grid grid-cols-2 gap-y-8 gap-x-24 pt-20 ">
            <div className=" ">
                <div className="inline-flex text-orange">
                    <h5 className='number'>01&nbsp;</h5>
                    <h5 className='points'>Briefing</h5>
                </div>
                 <p className="Description text-orange">we distill complex information into concise insights, providing a comprehensive overview of key elements. By ensuring clarity and focus, our briefings empower efficient decision-making and facilitate a streamlined understanding of critical topics.</p>
            </div>

            <div className=" ">
                <div className="inline-flex text-orange">
                    <h5 className='number'>02&nbsp;</h5>
                    <h5 className='points'>Design</h5>
                </div>
                 <p className="Description text-orange">Our approach to design revolves around crafting visually compelling experiences that seamlessly integrate with the user's needs and aspirations.</p>
            </div>

            <div className="">
                <div className="inline-flex text-orange">
                    <h5 className='number'>03&nbsp;</h5>
                    <h5 className='points'>Implementation</h5>
                </div>
                 <p className="Description text-orange">Through meticulous planning and agile execution, our implementation processes ensure the effective realization of objectives and drive sustainable success.</p>
            </div>

            <div className="">
                <div className="inline-flex text-orange">
                    <h5 className='number'>04&nbsp;</h5>
                    <h5 className='points'>Evaluation</h5>
                </div>
                 <p className="Description text-orange"> we analyze performance metrics and assess key indicators to measure success and identify areas for improvement. Our evaluations provide actionable insights, fostering informed decision-making and continual refinement for optimal outcomes.</p>
            </div>

            <div className="">
                <div className="inline-flex text-orange">
                    <h5 className='number'>05&nbsp;</h5>
                    <h5 className='points'>Workshops</h5>
                </div>
                 <p className="Description text-orange">Our workshops foster collaborative learning environments, combining expert guidance with interactive sessions to cultivate practical skills and knowledge. Tailored to participants' needs, our workshops empower individuals and teams to excel in their professional endeavors.</p>
            </div>

            <div className="">
                <div className="inline-flex text-orange">
                    <h5 className='number'>06&nbsp;</h5>
                    <h5 className='points'>Quality Assurance</h5>
                </div>
                 <p className="Description text-orange">Quality assurance is our unwavering commitment to excellence, meticulously ensuring that every aspect of our products or services meets the highest standards. Through rigorous testing and continuous improvement, we guarantee reliability and satisfaction for our customers.</p>
            </div>
        </div>

    </div>
  )
}

export default About