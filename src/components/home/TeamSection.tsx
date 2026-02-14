import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface TeamMember {
  name: string
  avatarSrc?: string
  description: string
}

interface TeamSectionProps {
  members?: TeamMember[]
  withContainer?: boolean
  className?: string
}

const FALLBACK_AVATAR = '/assets/images/index-pg/profile.png'

const defaultMembers: TeamMember[] = [
  {
    name: '张宇恒',
    avatarSrc: '/assets/images/team-profile/ray-zhang.png',
    description: '爱丁堡大学AI硕士，对人工智能算法和产品设计十分热衷，负责过基于3D激光雷达的工业AGV/AMR开发和的3D工程文件智能处理系统研发，设计基于几何+拓扑特征融合，并开发分布式特征向量索引架构。'
  },
  {
    name: '李旭然',
    avatarSrc: '/assets/images/team-profile/solaire-li.png',
    description: '苏黎世联邦理工学院和爱丁堡大学AI硕士。在ACM等多个竞赛获得国家级奖项，曾担任宏瓴科技的大模型工程师，主导开发了首个物流风险管控的多模态大语言模型。'
  },
  {
    name: '朱立畅',
    avatarSrc: '/assets/images/team-profile/henry-zhu.png',
    description: '帝国理工与布里斯托大学航天航空博士，获得过波音的奖学金，负责过为巴西航空工业优化机翼减重，热衷并精通工业产品设计，和结构优化。'
  },
  {
    name: '王小宾',
    avatarSrc: '/assets/images/team-profile/david-wang.png',
    description: '爱丁堡大学AI&CS硕士，拥有超过3年机器人，平行计算以及嵌入式软件开发和AI后端开发经验的全栈工程师。负责过城市管道缺陷检测机器人的开发。'
  },
  {
    name: '杜汉琴',
    avatarSrc: '/assets/images/team-profile/leo-du.png',
    description: '剑桥与帝国理工生物工程博士，腾讯前移动端开发工程师，主导过微生物研究所生物信息通用接口研发。聚焦机器学习驱动精准医疗创新，突破个性化医疗方案工程化瓶颈，实现技术临床场景落地。'
  },
  {
    name: 'SOHAIL AHMED B.',
    avatarSrc: '/assets/images/team-profile/sohail-ahmed.png',
    description: '哈尔滨工业大学（深圳）计算机科学与技术学士，拥有3年UI/UX设计、前端开发、应用开发及Linux系统经验。'
  }
]

export function TeamSection({ 
  members = defaultMembers,
  withContainer = true,
  className
}: TeamSectionProps) {
  const swiperContent = (
    <Swiper
      className={`team-swiper ${className || ''}`}
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4500, disableOnInteraction: false }}
      breakpoints={{
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 5 }
      }}
    >
      {members.map((member, index) => (
        <SwiperSlide key={index}>
          <div className="team-member">
            {member.avatarSrc ? (
              <img
                src={member.avatarSrc}
                alt="团队成员头像"
                className="team-avatar"
                onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_AVATAR }}
              />
            ) : (
              <div className="team-avatar" />
            )}
            <h4 className="team-name">{member.name}</h4>
            <p className="team-desc">{member.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )

  if (!withContainer) {
    return swiperContent
  }

  return (
    <section className="team-section">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            {swiperContent}
          </div>
        </div>
      </div>
    </section>
  )
}
