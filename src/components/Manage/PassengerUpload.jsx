import React, { useState } from 'react'
import { Upload, Icon } from 'antd'

const { Dragger } = Upload

const User = () => {
  const [file, setFile] = useState([])
  return (
    <Dragger
      customRequest={() => {}}
      beforeUpload={(f) => setFile([f])}
      fileList={file}>
      <p className="ant-upload-drag-icon">
        <Icon type="inbox" />
      </p>
      <p className="ant-upload-text">点击或拖拽文件到此区域以上传</p>
      <p className="ant-upload-hint">
      乘坐本次航班的所有乘客信息
      </p>
    </Dragger>)
}

export default User
