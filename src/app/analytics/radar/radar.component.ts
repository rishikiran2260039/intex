import { Settings } from './../../app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { Component, OnInit } from "@angular/core";
import { Chart } from "angular-highcharts";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})

export class RadarComponent implements OnInit {
  
  public single: any[];
  public two: any[];
  public three: any[];
  public sizes: any[];
  public colors: any[];
  public width: any[];
  public countries: any[];
  public singles: any[];
  public multi: any[];
  public analytics: any[];
  public showLegend = true;
  public showLegends = false;
  public gradient = true;
  public showXAxis = true;
  public showYAxis = true;
  public showXAxisLabel = false;
  public xAxisLabel = 'Year';
  public showYAxisLabel = false;
  public yAxisLabel = 'Population';
  public filterToggle:boolean;
  public filterToggle1:boolean;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 
  public colorScheme1 = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;
  public autoScale = true; 
 
   constructor(public appSettings:AppSettings,private titleService: Title) {
     this.settings = this.appSettings.settings; 
     const single = [
      {
        name: 'Raheja',
        value: 30
      },
      {
        name: 'Dr.Reddys',
        value: 25
      },
      {
        name: 'Revas Group',
        value: 10
      },
      {
        name: 'Dr Reddys',
        value: 15
      },
      {
        name: 'Reva Group',
        value: 20
      }
     
      
     ];
     const two = [
       {
         name: 'Raheja',
         value: 30
       },
       {
         name: 'Dr.Reddys',
         value: 25
       },
       {
         name: 'Revas Group',
         value: 10
       },
       {
         name: 'Dr Reddys',
         value: 15
       },
       {
         name: 'Reva Group',
         value: 20
       }
      
     ];
     const three = [
       {
         name: '1 Star',
         value: 25
       },
       {
         name: '2 Star',
         value: 15
       },
       {
         name: '3 Star',
         value: 9
       },
       {
         name: '4 Star',
         value: 30
       },
       {
         name: '5 Star',
         value: 21
       }
      
     ];
     Object.assign(this, {single,two,three}); 
   }
 
   public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.hardcodeChart();
    this.setTitle("Om Sai Intex | Radar");

  }
   monthyPulseOfEmployees;
   disciplineChartMonthly;
   EmployeesOnboardingChart;
   tentureOfEmployees;
   conversationChart;
   disciplinePercentagePieChart;
   EmployeesOnboardedPieChart;
   hiringMonthly;
   receiveandpay;
   aeginganalysis;
   delaydistribution;
   
   hardcodeChart() {
   
     this.monthyPulseOfEmployees = new Chart({
      chart: {
        type: "bar",
      },
      title: {
        text: null,
        style: {
          display: "none",
        },
      },
      credits: {
        enabled: false,
      },

      yAxis: {
        title: {
          text: null,
        },
      },
      xAxis: {
        categories: [
          "Raheja",
          "Dr.Reddy's",
          "Reva Group",
          "Dr.Reddy's",
          "Reva Group",
        ],
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: "{point.y}",
          },
          showInLegend: false,
        },
      },
      tooltip: {
        pointFormat:
          '<span style="color:{point.color}"> </span>: <b>{point.y}</b>',
      },
      series: [
        {
          type: "bar",
          color: "rgb(33, 101, 190)",
          data: [
            {
              name: "Raheja",
              y: 700000,
            },
            {
              name: "Dr.Reddy's",
              y: 600000,
            },
            {
              name: "Reva Group",
              y: 300000,
            },
            {
              name: "Dr.Reddy's",
              y: 800000,
            },
            {
              name: "Reva Group",
              y: 500000,
            },
          ],
        },
      ],
    });
 
     this. receiveandpay = new Chart({
 
       chart: {
         type: 'bar'
       },
       title: {
         text: null,
         style: {
           display: "none",
         },
       },
       xAxis: {
         categories: ['Manjeera Industries', 'Orion Group', 'Mantri Group', 'Asian Group', 'MNR Group'],
         title: {
           text: null,
          //  style: {
          //    display: "none",
          //  },
         }
       },
       yAxis: {
         min: 0,
         title: {
           text: 'RS.',
           align: 'high'
         },
         labels: {
           overflow: 'justify'
         }
       },
       tooltip: {
         valueSuffix: ' RS.'
       },
       plotOptions: {
         bar: {
           dataLabels: {
             enabled: true
           }
         }
       },
      
       credits: {
         enabled: false
       },
       series: [ {
         name: 'Budget',
         data: [700000, 600000, 800000, 300000, 500000]
       }, {
         name: 'Expense',
         data: [800000, 700000, 800000, 400000, 700000]
       }]
     
     });
 
     this.EmployeesOnboardingChart = new Chart({
       chart: {
         type: "line",
       },
       title: {
         text: null,
         style: {
           display: "none",
         },
       },
       credits: {
         enabled: false,
       },
       legend: {
         enabled: false,
       },
       plotOptions: {
         series: {
           dataLabels: {
             enabled: true,
             format: "{point.y}",
           },
           showInLegend: true,
         },
       },
       tooltip: {
         pointFormat:
           '<span style="color:{point.color}">{point.name} Rs. </span>: <b>{point.y}Cr</b>',
       },
 
       xAxis: {
         categories: [
           "Jan",
           "Feb",
           "Mar",
           "Apr",
           "May",
           "Jun",
           "Jul",
           "Aug",
           "Sep",
           "Oct",
           "Nov",
           "Dec",
         ],
       },
       yAxis: {
         title: {
           text: "Rs",
         },
       },
       series: [
         {
           type: "line",
           color: "rgb(33, 101, 190)",
           data: [2, 3, 4, 2, 1, 3, 5, 1, 2, 5, 2, 4],
         },
       ],
     });
     this.disciplineChartMonthly = new Chart({
       chart: {
         type: "line",
       },
       title: {
         text: null,
         style: {
           display: "none",
         },
       },
       credits: {
         enabled: false,
       },
       legend: {
         enabled: false,
       },
       plotOptions: {
         series: {
           dataLabels: {
             enabled: true,
             format: "{point.y}",
           },
           showInLegend: true,
         },
       },
       tooltip: {
         pointFormat:
           '<span style="color:{point.color}">{point.name} Purchase Orders </span>: <b>{point.y}</b>',
       },
       yAxis: {
         title: {
           text: "Purchase orders",
         },
       },
 
       xAxis: {
         categories: [
          
           "Jun",
           "Jul",
           "Aug",
           "Sep",
           "Oct",
           "Nov",
          
         ],
       },
       series: [
         {
           type: "line",
           color: "rgb(33, 101, 190)",
           data: [2, 3, 4, 7, 6, 3],
         },
       ],
     });
     this.hiringMonthly = new Chart({
       chart: {
         type: "line",
       },
       title: {
         text: null,
         style: {
           display: "none",
         },
       },
       credits: {
         enabled: false,
       },
       legend: {
         enabled: false,
       },
       plotOptions: {
         series: {
           dataLabels: {
             enabled: true,
             format: "{point.y}",
           },
           showInLegend: true,
         },
       },
       tooltip: {
         pointFormat:
           '<span style="color:{point.color}">{point.name} Expense </span>: <b>{point.y}</b>',
       },
       yAxis: {
         title: {
           text: "Expense",
         },
       },
 
       xAxis: {
         categories: [
          
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
           "Jun",
           "Jul",
           "Aug",
           "Sep",
           "Oct",
           "Nov",
           "Dec",
          
         ],
       },
       series: [
         {
           type: "line",
           color: "rgb(33, 101, 190)",
           data: [400000, 800000, 200000, 400000, 600000, 300000,400000, 800000, 200000, 400000, 600000, 300000],
         },
       ],
     });
 
 
     this.tentureOfEmployees = new Chart({
       chart: {
         type: "bar",
       },
       title: {
         text: null,
         style: {
           display: "none",
         },
       },
       credits: {
         enabled: false,
       },
 
       yAxis: {
         title: {
           text: null,
         },
       },
       xAxis: {
         categories: [
           "Raheja",
           "Dr.Reddy's",
           "Reva Group",
           "Dr.Reddy's",
           "Reva Group",
         ],
       },
       legend: {
         enabled: false,
       },
       plotOptions: {
         series: {
           dataLabels: {
             enabled: true,
             format: "{point.y}",
           },
           showInLegend: false,
         },
       },
       tooltip: {
         pointFormat:
           '<span style="color:{point.color}"> </span>: <b>{point.y}</b>',
       },
       series: [
         {
           type: "bar",
           color: "rgb(33, 101, 190)",
           data: [
             {
               name: "Raheja",
               y: 700000,
             },
             {
               name: "Dr.Reddy's",
               y: 600000,
             },
             {
               name: "Reva Group",
               y: 300000,
             },
             {
               name: "Dr.Reddy's",
               y: 800000,
             },
             {
               name: "Reva Group",
               y: 500000,
             },
           ],
         },
       ],
     });
 
     
     this. aeginganalysis = new Chart({
       chart: {
         type: "bar",
       },
       title: {
         text: null,
         style: {
           display: "none",
         },
       },
       credits: {
         enabled: false,
       },
 
       yAxis: {
         title: {
           text: null,
         },
       },
       xAxis: {
         categories: [
           "Less than 30 Days",
           "30-60 Days",
           "60-90 Days",
           "90-180 Days",
           "More than 6 Months",
         ],
       },
       legend: {
         enabled: false,
       },
       plotOptions: {
         series: {
           dataLabels: {
             enabled: true,
             format: "{point.y}",
           },
           showInLegend: false,
         },
       },
       tooltip: {
         pointFormat:
           '<span style="color:{point.color}"> </span>: <b>{point.y}</b>',
       },
       series: [
         {
           type: "bar",
           color: "rgb(33, 101, 190)",
           data: [
             {
               name: "Less than 30 Days",
               y: 700000,
             },
             {
               name: "30-60 Days",
               y: 600000,
             },
             {
               name: "60-90 Days",
               y: 300000,
             },
             {
               name: "90-180 Days",
               y: 800000,
             },
             {
               name: "More than 6 Months",
               y: 500000,
             },
           ],
         },
       ],
     });
     this.delaydistribution = new Chart({
       chart: {
         type: "bar",
       },
       title: {
         text: null,
         style: {
           display: "none",
         },
       },
       credits: {
         enabled: false,
       },
 
       yAxis: {
         title: {
           text: "%",
         },
       },
       xAxis: {
         categories: [
           "Funds",
           "Delay in Procurement",
           "Labour Shortage",
           "Bad Planning",
           "Low Productivity",
           "Others"
         ],
       },
       legend: {
         enabled: false,
       },
       plotOptions: {
         series: {
           dataLabels: {
             enabled: true,
             format: "{point.y}",
           },
           showInLegend: false,
         },
       },
       tooltip: {
         pointFormat:
           '<span style="color:{point.color}"> </span>: <b>{point.y}%</b>',
       },
       series: [
         {
           type: "bar",
           color: "rgb(33, 101, 190)",
           data: [
             {
               name: "Funds",
               y: 25,
             },
             {
               name: "Delay in Procurement",
               y: 15,
             },
             {
               name: "Labour Shortage",
               y: 20,
             },
             {
               name: "Bad Planning",
               y: 20,
             },
             {
               name: "Low Productivity",
               y: 10,
             },
             {
               name: "Others",
               y: 10,
             },
           ],
         },
       ],
     });
 
 
 
 
     this.conversationChart = new Chart({
       chart: {
         type: "line",
       },
       title: {
         text: null,
         style: {
           display: "none",
         },
       },
       credits: {
         enabled: false,
       },
       legend: {
         enabled: false,
       },
       plotOptions: {
         series: {
           dataLabels: {
             enabled: true,
             format: "{point.y}",
           },
           showInLegend: true,
         },
       },
       tooltip: {
         pointFormat:
           '<span style="color:{point.color}">{point.name} count </span>: <b>{point.y}</b>',
       },
 
       xAxis: {
         categories: [
           "Jan",
           "Feb",
           "Mar",
           "Apr",
           "May",
           "Jun",
           "Jul",
           "Aug",
           "Sep",
           "Oct",
           "Nov",
           "Dec",
         ],
       },
       series: [
         {
           type: "line",
           color: "rgb(33, 101, 190)",
           data: [15, 40, 35, 30, 32, 25, 36, 20, 30, 28, 36, 39],
         },
       ],
     });
     this.disciplinePercentagePieChart = new Chart({
       chart: {
         plotBackgroundColor: null,
         plotBorderWidth: null,
         plotShadow: false,
         type: "pie",
       },
       title: {
         text: "",
       },
       tooltip: {
         pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
       },
       credits: {
         enabled: false,
       },
       plotOptions: {
         pie: {
           allowPointSelect: true,
           cursor: "pointer",
           dataLabels: {
             enabled: true,
             format: "<br>{point.percentage:.1f} %",
             distance: -50,
           },
         },
       },
       series: [
         {
           type: "pie",
           // innerSize:'30%',
           name: "Share",
           data: [
             { name: "0 exceptions", y: 51, color: "rgb(26, 59, 204)" },
             { name: "1-2 exceptions", y: 23, color: "rgb(212, 87, 14)" },
             { name: "3-6 exceptions", y: 12, color: "grey" },
             { name: "6-10 exceptions", y: 7, color: "rgb(197, 185, 13)" },
             { name: "10+ exceptions", y: 7, color: "rgb(74, 120, 189)" },
           ],
         },
       ],
     });
 
     this.EmployeesOnboardedPieChart = new Chart({
       chart: {
         plotBackgroundColor: null,
         plotBorderWidth: null,
         plotShadow: false,
         plotBackgroundImage: null,
         type: "pie",
       },
       credits: {
         enabled: false,
       },
       title: {
         text: null,
       },
       yAxis: {
         title: {
           text: "No of Employees",
         },
       },
       tooltip: {
         pointFormat: "{series.name}:<b>{point.percentage:.1f}%</b>",
       },
       
       plotOptions: {
         pie: {
           allowPointSelect: true,
           cursor: "pointer",
           dataLabels: {
             enabled: true,
             format: "<br>{point.percentage:.1f} %",
             distance: -24,
           },
         },
       },
       series: [
         {
           type: "pie",
           
           name: "Share",
           data: [
             { name: "1st Qtr", y: 62, color: "rgb(26, 59, 204)" },
             { name: "2nd Qtr", y: 15, color: "rgb(212, 87, 14)" },
             { name: "3rd Qtr", y: 13, color: "grey" },
             { name: "4th Qtr", y: 10, color: "rgb(197, 185, 13)" },
           ],
         },
       ],
     });
   }
 
 }
