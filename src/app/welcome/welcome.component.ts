// package com.riabi.springboot.web;
// import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';

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

  // public SprinBootFirstWebApplication() {
  constructor() { }

  // void init () {
  ngOnInit() {
    console.log(this.message);
  }

}
