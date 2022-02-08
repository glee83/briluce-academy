import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
    // this.coursedetail(course.);
  }

  courses = [
    {
      'id': 1,
      imageUrl: './../../../assets/images/full-stack-developer.jpg',
      title: 'Full-Stack Web Development',
      subTitle: 'Become a web expert'
    },
    {
      'id': 2,
      imageUrl: './../../../assets/images/php.jpg',
      title: 'FrontEnd Web Development',
      subTitle: 'Become a front-end expert'
    },
    {
      'id': 3,
      imageUrl: './../../../assets/images/social.jpg',
      title: 'PHP programming courses',
      subTitle: 'Get PHP stills in no time'
    },
    {
      'id': 4,
      imageUrl: './../../../assets/images/seo.jpg',
      title: 'SEO Expert',
      subTitle: 'Search Engine Optimization'
    },
    {
      'id': 5,
      imageUrl: './../../../assets/images/laravel.png',
      title: 'Laravel programming',
      subTitle: 'Get back-end development skills'
    },
    {
      'id': 6,
      imageUrl: './../../../assets/images/social.jpg',
      title: 'Socail Media Marker',
      subTitle: 'Boost your skills in social networks'
    },
    {
      'id': 7,
      imageUrl: './../../../assets/images/nodejs.png',
      title: 'Node Js Developer',
      subTitle: 'Take your career to another level with Node js'
    },
    {
      'id': 8,
      imageUrl: './../../../assets/images/python.jpg',
      title: 'Python Programming',
      subTitle: 'Level up with Python'
    },
    {
      'id': 9,
      imageUrl: './../../../assets/images/react.jpg',
      title: 'React Js Programmiing',
      subTitle: 'Get started with FrontEnd skill'
    },
  ]

  selectCourse(course: any) {
    this.route.navigate(['/course', course.id])
  }

}
