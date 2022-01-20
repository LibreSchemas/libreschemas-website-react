/*  Copyright 2022 Dev Mindset Community Interest Company

    This file is part of LibreSchemas Website using React Next.js.

    LibreSchemas Website using React Next.js is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

    LibreSchemas Website using React Next.js is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License along with LibreSchemas Website using React Next.js. If not, see <https://www.gnu.org/licenses/>.
*/

import type { ReactElement } from 'react'
import Layout from '../components/layout'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

function Contributing() {
  return (<div>
    <Container className="my-3">
      <Row>
        <Col>
          <h2 className="text-center">Contributing</h2>
          </Col>
      </Row>
      <Row>
        <Col md={12}>
          <p>Those who have been a service user of public services like the NHS in the UK or have been involved with charities or research with universities may have heard of the term Coproduction. Coproduction tends to have different meanings in the settings that it is applied to. Though on a fundamental level Coproduction can be described as a group of people who work together equally to achieve a collective outcome. Although their is greater awareness of coproduction in healthcare, many Autistic people feel where it is offered they are not listened to or given adequate accommodations to participate.</p>

          <p>Co-production in Free and Open Source Software (FOSS) has existed since the inception of software in the 1950’s but it wasn’t until the 1980’s that it became more formalised with the GNU General Public License (the first Copyleft license). Microsoft’s dominance in software with Windows into the early 2000’s led to many FOSS advocates contributing and sharing code most famously for the Linux operating system. The Linux family of Operating Systems power the majority of servers and Android phones. Today, the contention in FOSS is some projects are considered too permissive which allow organisations to modify the source code and create proprietary software without publishing their code changes. The source code being the instructions recorded in files by programmers and executed by the computer. On the other hand some argue Copyleft licenses are too restrictive by requiring a organisation to publish their entire source code of any proprietary software derived from such a license. You can read further about this rich history in <a target="_blank" href="https://apo.org.au/node/312607">The coproduction of open source software by volunteers and big tech firms</a>.</p>
          <p>Software development in 2022 is diverse and widespread as computers have become integral to almost every human activity. It isn’t just programming skills that are needed to make good software. Graphics design skills or skills in understanding user interface design add much more to software by improving accessibility. Writing great content is important, whether that’s on a website or for an application, it will likely be stored in a database which can preserve it as a useful resource for many generations. The advancement of machine learning means more of us will be teaching computers as well as instructing them with code. Hopefully we can all benefit from what computers learn in the years to come.</p>
          <p><a target="_blank" href="https://github.com/">GitHub</a> today is the most popular provider to share code, with 73 million contributors, 200 million repositories for private use and 28 million public repositories that are FOSS. GitHub is free software in the cloud that enables software developers to track changes in source code (including images and data) with the ability to approve or rollback changes to the master branch or alternative branches. It is based on Git, created by Linus Torvald (the creator of Linux) that requires users to run Git on their own computers to push or pull changes to and from repositories on Github. Git has proved to be a powerful tool that allowed multiple contributors in a team to work collaboratively and GitHub has further extended its reach by enabling participation globally.</p>
          <p>LibreSchemas source code is distributed in multiple public repositories that anyone can freely browse and download from Github. LibreSchemas is a project rather than a single piece of software. The repositories are organised like separate components that can be  used together or separately with alternatively created software.. Each repository is licensed under a Copyleft license. To understand more about FOSS licensing and how it is applied to LibreSchemas read the <a target="_blank" href="/about">About</a> page.</p>
          <p>
          Anyone can sign up for a Github account for free (including anonymously) and begin contributing immediately. If you would like to be involved in the LibreSchemas project it would be optimal to contact us so we can co-ordinate work but their is nothing preventing you from attempting to push changes onto our GitHub repositories. Though they may be rejected with feedback if they are deemed to require more changes before they can be used by the project. Nevertheless the terms of the Copyleft licenses of LibreSchemas mean you are free to fork (as into copy) this project (including this website) and start your own if you wish.
          </p>
          <p>In order to contribute to the LibreSchemas project you may like to learn and develop new skills. Developing new skills could involve learning from tutorials online and then applying these new found skills to create a contribution to this project. This benefits you by demonstrating your skills conveyed from your Copyleft works (all your pushes on GitHub can be visible on your profile), users of LibreSchemas benefiting from your contribution and the Copyleft license of LibreSchemas enabling the potential for peer review and feedback as the project evolves.</p>
          <p>As a software project the ability to write programming code and contribute to LibreSchemas is desirable but not essential. Although a formal Computer Science course delivers the fundamental knowledge and skills to learn how to program it is not necessary. Continuous technology improvements, new programming languages and frameworks has made learning how to code never before easier. Scroll down to <a target="_blank" href="#learning-to-code">Learning to Code</a> to learn how to create programming code for LibreSchemas. If you feel comfortable in programming for LibreSchemas then scroll down to <a target="_blank" href="#contribute-code">Contributing Code</a> and read our <a target="_blank" href="documentation">Documentation</a>.</p>
          <p>Besides programming skills the ability to write content from a Neurodivergent perspective would be valuable to those who use the app. Such content can then be adapted to the LibreSchemas Datasets so it can be processed by software such as the LibreSchemas Client. Scroll down to <a target="_blank" href="#contribute-content">Contributing Content</a> to learn more.</p>
          <p>Design skills using <a target="_blank" href="https://www.adobe.com/products/photoshop.html">Adobe Photoshop</a> or <a target="_blank" href="https://www.gimp.org">Gimp</a> are also valuable. As well as sourcing and selecting free images that are suitable to be distributed with the Copyleft license of LibreSchemas. Scroll down to <a target="_blank" href="#learning-design">Learning Design</a> to learn more. If you feel comfortable in designing for LibreSchemas then scroll down to <a href="#contributing-design">Contributing Design</a>.</p>
          <p>There maybe additional skills or ideas that could be useful for the LibreSchemas project that we haven’t yet thought or haven’t had the resources to explore. If you would like to contribute then contact us.</p>
        </Col>
        </Row>
        <Row>
        <Col md={12}>
          <h5 id="learning-to-code">Learning to Code</h5>
        </Col>
        </Row>
        <Row>
        <Col md={12}>
          <p>A programming language is a set of consistent rules that a computer follows to interpret instructions made by a programmers code in the same language in order to translate this code into machine code for execution. Machine code is the low-level code that controls the processors in our hardware. Processors can be found in Personal Computers, Mobile Phones, Televisions, Washing Machines, Smart Home Devices and Vehicles.</p>
          <p>There are thousands of different programming languages often with different purposes. Many programming languages share similarities in syntax and some are easier to learn than others. Once we learn the fundamentals of one programming language it’s often easier to learn a second language and so on. It takes continuous practise and there is no limit on this kind of learning.</p>
          <p>JavaScript is a programming language invented for the web in the 90’s and was used to develop LibreSchemas. JavaScript is often confused with its similar name to the Java programming language. Their has been a debate whether JavaScript is a true programming language or simply a scripting language. Though many argue its ability to follow instructions on a universal computer means it is Turing complete (Alan Turing is credited in inventing the first computer and believed to be Autistic). As well as being coded in JavaScript, LibreSchemas uses the JavaScript frameworks of React (for this website and the LibreSchemas API) and React Native (for LibraSchemas client designed for devices like mobile). Additionally, Node.js is used to add more capabilities and together with NPM (Node Package Manager) more open source libraries (free code by others) have been installed to optimise output.</p>
          <p>Many learn JavaScript by first starting with React. Though if you have no experience in programming, attempting to understand how JavaScript and React works may be too overwhelming, as well as confusing. Therefore for absolute beginners it may be best to start with JavaScript. Unfortunately, learning JavaScript by itself isn’t as rewarding as developing in React because you can’t achieve a great deal in a short time without a framework (at least visibly) but the fundamentals learned will be beneficial when you start on real-world projects with React.</p>
          <p>We can all learn programming skills differently. Some can learn from books, others do better with formal tuition on a course but the majority learn from experience. If you prefer a a in-person course then the cheapest option may be a local college in your area and there are sometimes live tuition classes but these often aren’t cheap. The most popular way to learn to code is from consuming online content and following the online exercises and perhaps setting yourself your own to learn independently.</p>
          <p><a target="_blank" href="https://www.udemy.com">Udemy</a> is a brilliant platform for learning. Udemy offers recorded courses on all kinds of tech topics which include instructors sharing their screen as they code for you to follow in tandem. You can contact the Instructor by leaving comments if you you have issues and you can also read students comments if they have found alternative solutions. It’s common to find Udemy courses for £14.99 which can be great value for 40+ hours though at £59.99 it can be beyond many peoples price range.</p>

          <p><a target="_blank" href="https://www.codecademy.com">Codecdemy</a> is another popular online platform to learn to code. They have a subscription plan of £15.99 a month which gives you access to a huge range of courses. They also have a free plan which allows you to access their ‘Learn JavaScript’ and ‘Learn Intermediate JavaScript’ courses. The ‘Learn JavaScript’ course is beginner friendly with 10 lessons that are estimated to take 20 hours. The ‘Learn Intermediate JavaScript’ course has 9 lessons that are estimated to take 10 hours.</p>

          <p>A comprehensive platform to learn JavaScript is available at <a target="_blank" href="https://learnjavascript.online/">learnjavascript.online</a> where there are over 600 lessons. The first 77 lessons are free then you will be required to pay a one time payment that gives you access to all the courses for 5 years. The normal price as of writing is $199 though Its often advertised for $75. Though if you don’t have any funds to get up to speed quickly it’s possible to find many resources for free though they may not be of good quality .</p>

          <p>Once you feel comfortable with JavaScript then it’s a similar learning process for learning <a target="_blank" href="https://reactjs.org/">React</a> and <a target="_blank" href="https://reactnative.dev/">React Native</a>. Doing lots of small exercises from the courses will help build experience leading you to become more confident. Though it’s from working on your own real-world projects where greater understanding develops as well as the sense of achievement from delivering your own creative work.</p>

          <p>If you choose to go on to learning React to create websites then you will find learning some fundamentals about <a target="_blank" href="https://www.w3schools.com/html/">HTML</a> and <a target="_blank" href="https://www.w3schools.com/css/">CSS</a> a useful pre-requisite. HTML is a markup language for structuring websites and CSS is a style sheet language for presentation of websites. Neither are programming languages but they are the building blocks of websites that React uses. You will see our website source code shared in the LibraSchemas Website Repository is written in React and you could easily checkout in Git to run on your machine as well as push changes to GitHub.</p>

          <p>Finally, we have React Native which is a step up from React to create applications for devices like the iPhone, Android, Windows and Mac. It is possible to create websites with React Native though it’s not quite as versatile and mature as React. React Native can become more challenging when developing Apps as they can require extra steps to make them compile on the target devices. Though if a team is working on a App, individuals can specialise in the compilation for certain devices so other members can just focus on presentation and programming logic. <a target="_blank" href="https://expo.dev">Expo</a> is a framework that makes React Native development easier (at least for beginners) as it delivers a number of tools to support development. It’s recommended to use Expo when you first start learning (perhaps for your prototype App?) so your not put off by too much complexity to achieve quick results. As your skills develops you will likely find Expo too restrictive for you needs and prefer to just use React Native alone. When you are more confident , you may find it helpful to checkout our < a target="_blank" href="https://github.com/LibreSchemas/libreschemas-client-react-native-expo">LibreSchemas Client using React Native Expo</a> to learn how it works.</p>

          <p>The following are a collection of resources that can help you get started in learning to code for LibreSchemas.</p>

          <p><u>JavaScript Resources</u></p>
          <ul>
            <li><a target="_blank" href="https://www.udemy.com/course/the-complete-javascript-course/">Udemy: The complete JavaScript course:</a></li>
            <li><a target="_blank" href="https://www.codecademy.com/learn/introduction-to-javascript">Codecademy: Introduction to Javascript</a></li>
            <li><a target="_blank" href="https://www.codecademy.com/learn/learn-intermediate-javascript">Codecademy: Learn Intermediate JavaScript</a></li>
            <li><a target="_blank" href="https://learnjavascript.online">Learn JavaScript Online</a></li>
            <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript">Learn JavaScript with Mozilla</a> (creators of Firefox)</li>
            <li><a target="_blank" href="https://www.w3schools.com/js">W3 Schools Resources on JavaScript</a></li>
            <li><a target="_blank" href="https://javascript.info">JavaScript.info</a></li>
            <li><a target="_blank" href="https://youtu.be/PkZNo7MFNFg">YouTube: Learn JavaScript in 3 hours</a></li>
            <li><a target="_blank" href="https://youtu.be/W6NZfCO5SIk">YouTube: Learn JavaScript in 1 hour</a></li>
            <li><a target="_blank" href="https://youtu.be/jS4aFq5-91M">YouTube: Full JavaScript course</a> (almost 8 hours)</li>
          </ul>

          <p><u>React Resources</u></p>
          <ul>
            <li><a target="_blank" href="https://reactjs.org">Official React Website with Documentation and Tutorials</a></li>
            <li><a target="_blank" href="https://reactjs.org/community/courses.html">List of free and paid courses from the community to learn React on Reacts Website</a></li>
            <li><a target="_blank" href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">Udemy: The Complete React Course</a></li>
            <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started">Learn JavaScript with Mozilla</a> (creators of Firefox)</li>
            <li><a target="_blank" href="https://react-tutorial.app">React Tutorial</a></li>
            <li><a target="_blank" href="https://www.codecademy.com/learn/react-101">Codcdemy: Learn React</a></li>
            <p><b>Note:</b> There are many YouTube courses for React but you have be careful that they aren’t too out of date as the technology changes over time.</p>
          </ul>

          <p><u>React Native Resources</u></p>
          <ul>
            <li><a target="_blank" href="https://expo.dev/">Official Expo Website with Documentation and Tutorials for building React Native Apps</a></li>
            <li><a target="_blank" href="https://reactnative.dev">Official React Native Website with Documentation and Tutorials</a></li>
            <li><a target="_blank" href="https://reactnative.dev/help">Resources from the community to learn React Native from the official  React Native Website</a></li>
            <li><a target="_blank" href="https://www.codecademy.com/learn/learn-react-native">Codecdemy: Learn React Native</a></li>
            <li><a target="_blank" href=" https://medium.com/javarevisited/top-5-react-native-courses-for-mobile-application-developers-b82febdf8a46">A regularly updated article that lists the top online courses to learn React Native.</a></li>
          </ul>

          <p><u>Additional Resources</u></p>
          <p>You will of course need a PC or Mac to develop with JavaScript and React. Microsoft <a target="_blank" href="https://code.visualstudio.com/">Visual Studio Code</a> is free and one of the most popular editors for coding. Using a code editor is important as it can highlight JavaScript syntax mistakes and suggest fixes for common mistakes. Chrome and Firefox are popular web browsers for testing JavaScript and React code</p>
          <p>The Expo client app available on <a target="_blank" href="https://play.google.com/store/apps/details?id=host.exp.exponent">Google Play</a> and the <a target="_blank" href="https://apps.apple.com/app/expo-go/id982107779">Apple App Store</a> will allow you to test your developing React Native Apps that use Expo on your Android and IOS devices. However, to release to App stores like Google Play you will need <a target="_blank" href="https://developer.android.com/studio">Android Studio</a> installed and you would need a Mac to compile your app with Xcode to release to the Apple App Store. Although Android Studio has simulators for Google Phones and <a target="_blank" href="https://developer.apple.com/xcode/">Xcode</a> has simulators of iPhones you will often find physical variants of these maybe needed to fully test your code. Devices like an iPod Touch or iPad can be helpful additions if you already own an Android phone.</p>
          <p>Your will need install <a target="_blank" href="https://nodejs.org/">Node.js</a> in order to create React and React Native software. It’s best to stick with the Long Term Support (LTS) release for security and stability. You can download Node.JS from here. NPM (Node Package Manager) is included with Node.js which will be needed to install additional libraries like for example a text to speech package. Lots of FOSS Node packages can be found at <a target="_blank" href="https://www.npmjs.com/">npmjs.com</a> which as a directory and host for all these packages.</p>
          <p>You’re going to need a copy of Git as mentioned before to log changes and push them into repositories on GitHub. Git is necessary when you start your project as there will be times where you make mistakes or cause bugs in your code and need to rollback. Likewise it’s designed for working in teams so learning Git will make collaboration more productive. The easiest Git to learn that works seamlessly with GitHub is <a target="_blank" href="https://desktop.github.com/">GitHub Desktop</a> which has a GUI (Graphical User Interface). There are many people that prefer to use the command line for Git and you will find by using NPM that you will gain confidence in this way of interfacing with your developing software.</p>

          <p>The <a target="_blank" href="https://github.com/LibreSchemas/libreschemas-server-api-react">LibreSchemas Server API</a> is the middleware between the LibreSchemas Client and the database. The LibreSchemas Client uses <a target="_blank" href="https://graphql.org">Graphql</a> (a query language) to request data from the LibraSchemas Server API (this usually being to retrieve the Schemas). The LibreSchemas Server API is based on React and converts the Graphql queries from the LibreSchemas Client into queries that can be used to read a <a target="_blank" href="https://www.mongodb.com/">MongoDB</a> database (This is FOSS software you can install on your machine too). The datasets which contain the Schemas are in <a target="_blank" href="https://www.w3schools.com/whatis/whatis_json.asp">JSON</a> (JavaScript Object Notation) format and can be imported using <a target="_blank" href="https://www.mongodb.com/products/compass">Compass</a> which is a GUI to interact with a created server instance of MongoDB. Learning <a target="_blank" href="https://mongoosejs.com/">Mongoose</a> for MongoDB and JSON formats would be useful in understanding how the LibreSchemas Client, LibreSchemas Server API and LibraSchemas datasets all fit together. Though it isn’t necessary to understand all of LibreSchemas to contribute and not everyone would be interested in gaining broad understanding.</p>
        </Col>
        </Row>
        <Row>
        <Col md={12}>
          <h5 id="contribute-code">Contributing Code</h5>
        </Col>
        </Row>
        <Row>
        <Col md={12}>
          <p>Assuming you have mastered Git (if not <a target="_blank" href="https://docs.github.com/en/desktop">this will get you started</a>) and have a GitHub account then you can checkout code from our LibreSchemas repositories (see links in footer).  You can then make modifications and test on your own machine.  Then push it back to us on GitHub. We would advise contacting us if you want to get involved in order for us to co-collaborate more effectively. If you have a new LibreSchemas project in mind then we would be happy to create additional public repositories and support it as best as we can.</p>
        </Col>
        </Row>
        <Row>
        <Col md={12}>
          <h5 id="contribute-content">Contributing Content</h5>
        </Col>
        </Row>
        <Row>
        <Col md={12}>
          <p>Not everyone can or wants to learn to code.  Though that doesn’t mean you can’t get involved. Downloading the LibraSchemas Datasets (see links in footer) through your web browser (you don’t need git) will allow you to read the content used in each schema. It’s not very user friendly to read, write or create new datasets at present.  Useful editing software is <a target="_blank" href="https://notepad-plus-plus.org/">Notepad++</a> and <a target="_blank" href="https://www.microsoft.com/en-gb/p/jsoneditor/">JsonEditor</a>. Eventually documentation will be written to explain the structure of the JSON files that make up the datasets to create the Schemas. A tool developed in React that creates user friendly dynamic forms to build Schemas would be extremely useful for this purpose.  For now, submitting Schemas written in MS Word or Excel would be acceptable and they could then be copy and pasted to build the appropriate JSON format.</p>
          <p>When choosing to submit Schemas as new LibreSchemas datasets you will need to decide which Copyleft license will apply to your Copyrighted work.  We would recommend submitting your dataset to all three repositories (the Creative Commons BY-SA 4.0, GNU General Public License Version 3 and GNU Affero General Public License Version) for maximum Copyleft compatibility. Though you may want to read our <a target="_blank" href="/about">About</a> page before deciding as once you grant your works under Copyleft terms it is for perpetuity (it can’t be taken back) but you still own the copyright to your works to do as you please with them.</p>
          <p>
          LibreSchemas is designed for users that can read English. Particularly for those who live in the majority English speak countries of United Kingdom, Australia, the USA, Canada, Ireland and New Zealand. There are obviously many Autistic people that don’t speak or use English every day in their home countries.  Therefore, someone with the skills to translate our existing Schemnas into additional languages with their own cultural nuances would benefit the LibraSchemas project
          </p>
          <p>
          If you have other content ideas, whether that’s for this website, new projects or social media then do contact us.
          </p>
        </Col>
        </Row>
        <Row>
        <Col md={12}>
          <h5 id="learning-design">Learning Design</h5>
        </Col>
        </Row>
        <Row>
        <Col md={12}>
          <p>Photoshop is without doubt the best application for graphics design.  Though like with programming it takes time to master and which can only come from experience.  Many colleges in the UK offer short term weekend and evening beginners course in Photoshop if you want to quickly get up to speed.  Photoshop isn’t cheap with packages starting at £9.98 a month (or £120 a year) with discounts for university students who buy a larger package including Illustrator.  You can find can often substantial annual discounts from the likes of Amazon during the Black Friday sales period. A FOSS alternative is GIMP, though if you’re looking to build skills for your CV then it’s best to stick to Photoshop as it’s the dominant package in industry.</p>

          <p>Below are some links to begin learning Photoshop:</p>
          <ul>
            <li><a target="_blank" href="https://helpx.adobe.com/photoshop/tutorials.html">Adobe offers several free Photoshop tutorials</a></li>
            <li><a target="_blank" href="https://www.udemy.com/course/adobe-photoshop-cc-essentials-training-course/">Udemy: Adobe Photoshop CC – Essentials Training Course</a></li>
            <li><a target="_blank" href="https://www.udemy.com/course/ultimate-photoshop-training-from-beginner-to-pro/">Udemy: Ultimate Adobe Photoshop Training: From Beginner to Pro 2022</a></li>
            <li><a target="_blank" href="https://www.udemy.com/course/adobe-photoshop-course/">Udemy: Adobe Photoshop CC: A Beginner to Advanced Photoshop Course</a></li>
            <li><a target="_blank" href="https://www.photoshopessentials.com/">PhotoShopEssentials.com offers numerous free and paid tutorials</a></li>
          </ul>

          <p>Doing a search for “Learn Photoshop” or “Photoshop Tutorials” on YouTube will list a whole host of videos on using Photoshop to achieve different results. You may want to do this once you have some rudimentary understanding.</p>
        </Col>
        </Row>
        <Row>
        <Col md={12}>
          <h5 id="contributing-design">Contributing Design</h5>
        </Col>
        </Row>
        <Row>
        <Col md={12}>
          <p>LibreSchemas needs quality images for all of it Schemas.  If you use NeuroSchema you will see it has many high-quality images but these are mostly copyrighted stock photos licensed to NeuroSchemas (e.g. purchased). LibraSchemas images will need to be in the public domain or can be licensed under Copyleft with the LIbraSchemas software.  Sourcing and contributing high quality Copyleft images would be helpful to this project.  Photoshop skills to edit and resize images plus designing new images and logos would be desirable as well.</p>
        </Col>
        </Row>
    </Container>
    </div>
  )
}

Contributing.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Contributing