import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Select from "react-select";

const avatars = [
  <Avatar
    alt="1"
    src="https://res.cloudinary.com/dvs5vwutf/image/upload/v1641491940/teamBlue/Asset_1_jgozg9.png"
  />,
  <Avatar
    alt="2"
    src="https://res.cloudinary.com/dvs5vwutf/image/upload/v1641491940/teamBlue/Asset_2_ezoecr.png"
  />,
  <Avatar
    alt="3"
    src="https://res.cloudinary.com/dvs5vwutf/image/upload/v1641491940/teamBlue/Asset_4_gyld8p.png"
  />,
  <Avatar
    alt="4"
    src="https://res.cloudinary.com/dvs5vwutf/image/upload/v1641491940/teamBlue/Asset_6_r70zxg.png"
  />,
  <Avatar
    alt="5"
    src="https://res.cloudinary.com/dvs5vwutf/image/upload/v1641491940/teamBlue/Asset_3_rgdmzc.png"
  />,
  <Avatar
    alt="6"
    src="https://res.cloudinary.com/dvs5vwutf/image/upload/v1641491939/teamBlue/Asset_5_ajxjpn.png"
  />,
  <Avatar
    alt="7"
    src="https://res.cloudinary.com/dvs5vwutf/image/upload/v1641491939/teamBlue/Asset_8_x9a0xi.png"
  />,
  <Avatar
    alt="8"
    src="https://res.cloudinary.com/dvs5vwutf/image/upload/v1641491939/teamBlue/Asset_7_zlnjei.png"
  />,
  <Avatar
    alt="9"
    src="https://res.cloudinary.com/dvs5vwutf/image/upload/v1641491939/teamBlue/Asset_16_brmn67.png"
  />,
  <Avatar
    alt="10"
    src="https://res.cloudinary.com/dvs5vwutf/image/upload/v1641491939/teamBlue/Asset_11_cghe3a.png"
  />,
  <Avatar
    alt="11"
    src="https://res.cloudinary.com/dvs5vwutf/image/upload/v1641491939/teamBlue/Asset_10_bk0xeu.png"
  />,
  <Avatar
    alt="12"
    src="https://res.cloudinary.com/dvs5vwutf/image/upload/v1641491939/teamBlue/Asset_9_todqoj.png"
  />,
  <Avatar
    alt="13"
    src="https://res.cloudinary.com/dvs5vwutf/image/upload/v1641491939/teamBlue/Asset_12_fbznsf.png"
  />,
  <Avatar
    alt="14"
    src="https://res.cloudinary.com/dvs5vwutf/image/upload/v1641491939/teamBlue/Asset_13_egw6cb.png"
  />,
];
const options = [
  { value: avatars[0], label: avatars[0] },
  { value: avatars[1], label: avatars[1] },
  { value: avatars[2], label: avatars[2] },
  { value: avatars[3], label: avatars[3] },
  { value: avatars[4], label: avatars[4] },
  { value: avatars[5], label: avatars[5] },
  { value: avatars[6], label: avatars[6] },
  { value: avatars[7], label: avatars[7] },
  { value: avatars[8], label: avatars[8] },
  { value: avatars[9], label: avatars[9] },
  { value: avatars[10], label: avatars[10] },
  { value: avatars[11], label: avatars[11] },
  { value: avatars[12], label: avatars[12] },
  { value: avatars[13], label: avatars[13] },
];

const AvatarPicker = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </>
  );
};

export default AvatarPicker;
