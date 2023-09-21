import { useEffect, useState } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";
import { BsBriefcase, BsFillHouseFill, BsGenderAmbiguous } from 'react-icons/bs';
import { AiOutlinePhone } from "react-icons/ai";
import { FaCity } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { LinearProgress } from "@mui/material";

const Details = () => {
    const [details, setDetails] = useState({})
    const [skills, setSkills] = useState([])
    // const skills = ['Html','CSS','JavaScript','Bootstrap','Tailwind','Material UI','Node.js','Express.js','Firebase','React','Vue','MongoDB','Rest API','React Query','Figma','Adobe XD','JQuery','Socket.io']
    const params = useParams().id
    console.log(params);
    useEffect(() => {
        axios.get(`https://api.slingacademy.com/v1/sample-data/users/${params}`)
            .then(function (response) {
                console.log(response);
                setDetails(response.data.user)
            })
            .catch(function (error) {
                console.log(error);
            })
        axios.get('../../../public/skills.json')
        .then((res) => setSkills(res.data))
        .catch((err)=>console.log(err))
    },[])
    return (
        <section className="max-w-6xl mx-auto grid grid-cols-12 gap-5 items-start mt-36 mb-20">
            {/* Dynamic content showed from api */}
            <div className="col-span-3 border-r border-slate-700 pr-5 pb-10">
                <img src={details?.profile_picture} alt="profile-image" className="rounded-full mb-6"/>
                <h5 className="text-xl font-semibold">{details?.first_name+" "+details?.last_name}</h5>
                <h5 className="overflow-hidden text-gray-500">{details?.email}</h5>
                <h2 className="mt-10 mb-5 text-lg font-semibold w-8/12 border-b">Details</h2>
                <ul className="flex flex-col gap-2">
                <li className="overflow-hidden flex items-center gap-1"><BsGenderAmbiguous/>{details?.gender}</li>
                <li className="overflow-hidden flex items-center gap-1"><BsBriefcase/>{details?.job}</li>
                <li className="overflow-hidden flex items-center gap-1"><AiOutlinePhone/>{details?.phone}</li>
                <li className="overflow-hidden flex items-center gap-1"><BiWorld/>{details?.country}</li>
                <li className="overflow-hidden flex items-center gap-1"><FaCity/>{details?.city}</li>
                <li className="overflow-hidden flex items-center gap-1"><BsFillHouseFill/>{details?.state}</li>
                </ul>

            </div>
            {/* Static content showed for design purpose */}
            <div className="col-span-9 p-5">
                <h1 className="text-xl font-semibold mb-3 border-b">About</h1>
                <p className="text-lg">Greetings to all visitors! I'm Md. Mehedi Hasan, a dedicated front-end developer deeply passionate about crafting exceptional web interfaces. Armed with a strong command of HTML, CSS, and JavaScript, I specialize in weaving together captivating online experiences. Utilizing my expertise in React and Vue.js, I design and develop responsive interfaces that not only function seamlessly but also engage users in a meaningful way. I'm excited to collaborate with you and transform your ideas into vibrant and interactive web realities!</p>
                <h1 className="text-xl font-semibold mb-3 border-b mt-10">Skills</h1>
                <ul className="grid grid-cols-2 gap-x-20 gap-y-8 mt-10">
                    {skills.map((skill, index) =>
                        <li key={index}>
                            <span className="text-lg font-semibold text-gray-500">{skill?.name}</span>
                            <LinearProgress variant="determinate" value={skill.value} sx={{borderRadius:'9999px',height:'7px'}} />
                        </li>)}
                </ul>
                <h1 className="text-xl font-semibold mb-3 border-b mt-20">Summary</h1>
                <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo placeat mollitia tempore cupiditate. Iure distinctio officiis at numquam fugit? Aperiam doloremque repellendus hic quidem eligendi, facilis nobis dolor nam consectetur voluptatem? Asperiores, magni. Ab esse aliquid, id adipisci facere eos nihil voluptatem quis totam voluptate quod nam sint est reprehenderit eius quidem quibusdam in corporis praesentium laboriosam suscipit obcaecati eligendi provident beatae. Repudiandae nam numquam, consequatur dignissimos iusto accusamus voluptatum accusantium aliquid tenetur quas rem, sequi, totam quae. Quod adipisci delectus vitae nostrum impedit perspiciatis corporis nam eum nihil ipsa esse distinctio, earum sint nemo sapiente. Impedit eaque praesentium aperiam.</p>
            </div>
        </section>
    );
};

export default Details;