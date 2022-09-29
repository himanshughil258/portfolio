import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-centre w-full h-full">
        <div className="pb-8 py-16">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-11">
            I am Himanshu and I am from Dehradun, Uttarakhand. Currently I am pursuing MCA from Graphic Era Hilll University.
            I have completed my graduation from Graphic Era Hill University in 2021.
            I have completed my higher Secondary from Army public school clement town and I have completed my 
            Secondary School from Army public School Patiala. And my hobbies are reading books, Playing football, Travelling to new places,
            Listen to music.
        </p>
        <br />
        <p className="text-xl">
            My objective is to work for a professional and leading organization that provides opportunities for continuous career growth
            and share my knowledge with management, whomever I put to work. I am a dependable and creative person who is great at time management
            and use creative approach to solve the problem. I am always energetic and eager to learn new skills.
        </p>
      </div>
    </div>
  )
}

export default About
