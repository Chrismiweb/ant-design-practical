import React, { useState } from 'react'
import { Button, DatePicker,QRCode  } from "antd";

function AntDesign() {
    // state for the link
    // const[BaseUrl, SetBaseUrl] = useState('www.google.com')
    const BaseUrl = 'https://www.toshconsultinc.com/'

  return (
    <div className='flex flex-col justify-center items-center'>
        <h1>AntDesign</h1>
        {/* button component */}
        <Button className='' type="primary">PRESS ME</Button>
        {/* date picker  */}
        <DatePicker placeholder="select date" />
        {/* QR code element */}
        <QRCode value={BaseUrl}></QRCode>

    </div>
   
  )
}

export default AntDesign