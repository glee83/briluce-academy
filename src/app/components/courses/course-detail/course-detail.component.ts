import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  constructor( private router: ActivatedRoute) { }

  ngOnInit(): void {

    // let id = parseInt(this.router.snapshot.paramMap.get('id'));
  }

}
