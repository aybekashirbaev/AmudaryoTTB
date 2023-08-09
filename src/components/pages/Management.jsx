import React from 'react';
import Doctor_1 from '../../assets/gla-vrach.jpg'
import Doctor_2 from '../../assets/vrach-2.jpg'
import Doctor_3 from '../../assets/vrach-3.jpg'
import Doctor_4 from '../../assets/vrach-4.jpg'
const Management = () => {
    return (
        <div id='managament'>
            <h1>Rahbariyat</h1>
            <div class="cards">
                <div class="card" data-aos="fade-up">
                    <img src={Doctor_1} alt="" />
                    <div class="user-name">
                        <span class="span"><i class="fa-solid fa-user-tie"></i> Abdullaev Faxriddin
                            Raximovich</span>
                        <span>Amudaryo tuman tibbiyot bittalashmasi boshliǵi</span>
                    </div>
                </div>
                <div class="card" data-aos="fade-up">
                    <img src={Doctor_2} alt="" />
                    <div class="user-name">
                        <span class="span"><i class="fa-solid fa-user-tie"></i> Sobirov Xakimjon
                            Sádullaevich</span>
                        <span>
                            Amudaryo tuman tibbiyot bittalashmasi ambulator poliklinika
                            bўyicha boshliq orinbosari</span>
                    </div>
                </div>
                <div class="card" data-aos="fade-up">
                    <img src={Doctor_3} alt="" />
                    <div class="user-name">
                        <span class="span"><i class="fa-solid fa-user-tie"></i> Xidirov Egambergan
                            Xudaybergenovich</span>
                        <span>
                            Onalik va bo'llaralikni muxofaza qilish bўyicha boshliq
                            orinbosari</span>
                    </div>
                </div>
                <div class="card" data-aos="fade-up">
                    <img src={Doctor_4} alt="" />
                    <div class="user-name">
                        <span class="span"><i class="fa-solid fa-user-tie"></i> Jumaniyozov Shuxrat
                            Xudayorovich</span>
                        <span>davolash ichlari bўyicha boshliq orinbosari</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Management;