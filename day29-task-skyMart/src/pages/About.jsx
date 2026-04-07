import AboutHero from '../components/AboutHero'
import AboutStatCard from '../components/AboutStatCard'
import ValueCard from '../components/ValueCard'
import TeamMemberCard from '../components/TeamMemberCard'
import CallToAction from '../components/CallToAction'

const stats = [
  { iconClass: 'ri-archive-2-line', value: '20K+', label: 'Products' },
  { iconClass: 'ri-team-line', value: '50K+', label: 'Happy Customers' },
  { iconClass: 'ri-star-smile-line', value: '4.9', label: 'Avg. Rating' },
  { iconClass: 'ri-truck-line', value: '99%', label: 'On-time Delivery' },
]

const values = [
  {
    iconClass: 'ri-shield-check-line',
    title: 'Trust',
    description: 'Every product is verified for quality and authenticity before listing.',
  },
  {
    iconClass: 'ri-flashlight-line',
    title: 'Speed',
    description: 'We obsess over delivery times so your orders arrive when promised.',
  },
  {
    iconClass: 'ri-hand-heart-line',
    title: 'Community',
    description: 'Built around real customer feedback, not just business metrics.',
  },
  {
    iconClass: 'ri-star-line',
    title: 'Quality',
    description: 'We curate the best — no filler, no junk, just great products.',
  },
]

const team = [
  { name: 'Aryan Shah', role: 'Founder & CEO', badge: 'A', badgeColor: 'bg-volt text-ink' },
  { name: 'Priya Mehta', role: 'Head of Product', badge: 'P', badgeColor: 'bg-blue-500 text-white' },
  { name: 'Rohan Verma', role: 'Lead Engineer', badge: 'R', badgeColor: 'bg-purple-500 text-white' },
  { name: 'Sneha Kapoor', role: 'Design Director', badge: 'S', badgeColor: 'bg-rose-500 text-white' },
]

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <AboutHero
        title="About"
        highlight="SkyMart"
        subtitle="SkyMart is a next-generation e-commerce platform built to make online shopping fast, fair, and enjoyable — for everyone."
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
        {stats.map((item) => (
          <AboutStatCard key={item.label} {...item} />
        ))}
      </div>

      <section className="bg-[#111] border border-white/80 rounded-3xl p-8 sm:p-10 mb-12">
        <h2 className="font-heading font-bold text-2xl mb-4">Our Story</h2>
        <div className="space-y-4 text-white/50 font-body text-sm leading-relaxed">
          <p>
            SkyMart started in 2022 as a small side project — two engineers tired of bloated, slow
            e-commerce experiences. We asked ourselves: what if shopping online was actually
            <em className="text-white/70"> enjoyable</em>?
          </p>
          <p>
            Three years later, SkyMart serves over 50,000 customers across the country. We stock
            electronics, fashion, jewelry, and everyday essentials — all at prices that don&apos;t
            require a second mortgage.
          </p>
          <p>
            We&apos;re still the same team at heart: obsessed with speed, transparency, and making
            you feel good about every purchase you make here.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-heading font-bold text-2xl mb-6 text-center">What We Stand For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-heading font-bold text-2xl mb-6 text-center">Meet the Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {team.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </section>

      <CallToAction
        title="Ready to shop?"
        subtitle="Explore thousands of products at unbeatable prices."
        actionLabel="Browse Products"
        href="/products"
      />
    </div>
  )
}

export default About