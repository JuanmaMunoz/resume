import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-profesional-growth',
  templateUrl: './profesional-growth.component.html',
  styleUrls: ['./profesional-growth.component.scss'],
})
export class ProfesionalGrowthComponent implements OnInit {
  public chart: any;
  ngOnInit(): void {
    this.createChart();
  }

  private createChart() {
    const ctx = document.getElementById('growth');

    new Chart(ctx as any, {
      type: 'radar',
      data: {
        labels: [
          'Arquitectura',
          'Gestión de equipos',
          'Soporte Producto',
          'Expertise técnico',
          'Arquitectura Micro-sites',
          'Soporte Back-Front',
          'Soporte Ux-Front',
        ],
        datasets: [
          {
            label: '2020',
            data: [50, 50, 60, 60, 0, 70, 70],
            borderWidth: 1,
            backgroundColor: 'rgba(108, 117, 125, 0.3)',
            borderColor: 'rgba(108, 117, 125, 1)',
          },
          {
            label: '2022',
            data: [80, 70, 80, 80, 50, 80, 85],
            borderWidth: 1,
            backgroundColor: 'rgba(88, 21, 28, 0.3)',
            borderColor: 'rgba(88, 21, 28, 1)',
          },
          {
            label: '2024',
            data: [95, 90, 90, 95, 85, 90, 95],
            borderWidth: 1,
            backgroundColor: 'rgba(110, 168, 254, 0.3)',
            borderColor: 'rgba(110, 168, 254, 1)',
          },
        ],
      },
      options: {
        elements: {
          line: {
            borderWidth: 3,
          },
        },
        plugins: {
          title: {
            font: {
              size: 30,
            },
          },
        },
        //borderColor: 'rgba(110, 168, 254, 1)',
      },
    });
  }
}
