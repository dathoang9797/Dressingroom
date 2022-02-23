import React from 'react'
import IMAGES from 'assets/images/index'
const { cybersoftImage } = IMAGES;

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="card hovercard">
                    <div className="card-background"></div>
                    <div className="useravatar">
                        <img alt="cybersoft.edu.vn" src={cybersoftImage} />
                    </div>
                    <div className="card-info">
                        <span className="card-title">
                            CyberSoft.edu.vn - Đào tạo chuyên gia lập trình - Dự án thử đồ
                            trực tuyến - Virtual Dressing Room
                        </span>
                    </div>
                </div>
            </div>
            <hr className="style13" />
        </div>
    )
}

export default Header