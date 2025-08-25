import { FaNodeJs, FaLaravel, FaHtml5, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa";
import { SiExpress, SiTypescript, SiTailwindcss, SiVite, SiPhp, SiJson, SiDart, SiFlutter, SiPrisma, SiMongodb } from "react-icons/si";

function Skills() {
  return (
    <div className="skills flex gap-4 flex-wrap text-3xl">
      <FaNodeJs />
      <SiExpress />
      <FaLaravel />
      <FaHtml5 />
      <FaCss3Alt />
      <FaJs />
      <SiTypescript />
      <SiTailwindcss />
      <FaGithub />
      <SiVite />
      <SiPhp />
      <SiJson />
      <SiDart />
      <SiFlutter />
      <SiPrisma />
      <SiMongodb />
    </div>
  )
}

export default Skills;