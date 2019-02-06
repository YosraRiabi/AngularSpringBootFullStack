// package com.riabi.springboot.web;
// import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

// @ComponentScan (
//         value = "com.riabi.springboot.web")
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

// public class SprinBootFirstWebApplication implements SomeInterface {
export class WelcomeComponent implements OnInit {

  // String message = "some welcome message";
  message = 'some welcome message';
  name = '';

  // public SprinBootFirstWebApplication() {

  // ActivatedRouter
  constructor(private route: ActivatedRoute) { }

  // void init () {
  ngOnInit() {
    console.log(this.message);
   // console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }

}
