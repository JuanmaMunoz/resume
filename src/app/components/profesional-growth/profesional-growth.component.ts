import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Chart from 'chart.js/auto';
import { Subscription } from 'rxjs';
import { ICharData, IDataset, IGrowth, IInfoUser, IProfessionalGrowth } from 'src/app/models/interfaces';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
    selector: 'app-profesional-growth',
    templateUrl: './profesional-growth.component.html',
    styleUrls: ['./profesional-growth.component.scss'],
    standalone: false
})
export class ProfesionalGrowthComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() idChart: string = '';
  @ViewChild('canvas') canvas!: HTMLCanvasElement;
  public chart: any = null;
  private subscription = new Subscription();
  private chartData!: ICharData;
  private charColors = [
    { backgroundColor: 'rgba(13, 110, 253, 0.3)', borderColor: 'rgba(13, 110, 253, 1)' },
    {
      backgroundColor: 'rgba(88, 21, 28, 0.3)',
      borderColor: 'rgba(88, 21, 28, 1)',
    },
    {
      backgroundColor: 'rgba(110, 168, 254, 0.3)',
      borderColor: 'rgba(110, 168, 254, 1)',
    },
  ];
  constructor(private translate: TranslateService, private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.resumeService.infoUser.subscribe((info: IInfoUser) => {
        if (info.professionalGrowth && this.canvas) {
          this.setCharData(info.professionalGrowth);
          this.createChart();
        }
      })
    );
  }

  ngAfterViewInit(): void {
    if (this.resumeService.infoUser.getValue().professionalGrowth) {
      this.setCharData(this.resumeService.infoUser.getValue().professionalGrowth!);
      this.createChart();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private setCharData(professionalGrowth: IProfessionalGrowth): void {
    this.chartData = { ...this.chartData, labels: professionalGrowth.names, datasets: [] };
    professionalGrowth.growth.forEach((e: IGrowth, index) => {
      const dataset: IDataset = {
        label: e.year.toString(),
        data: e.values,
        backgroundColor: this.charColors[index].backgroundColor,
        borderColor: this.charColors[index].borderColor,
        borderWidth: 1,
      };
      this.chartData.datasets.push(dataset);
    });
  }

  private createChart() {
    if (this.chart) this.chart.destroy();
    const ctx = document.getElementById(this.idChart);

    this.chart = new Chart(ctx as any, {
      type: 'radar',
      data: this.chartData,
      options: {
        layout: {
          padding: 0, // Elimina el padding externo de la gráfica
        },
        scales: {
          r: {
            grid: {
              color: '#666',
              lineWidth: 0.3,
            },
            angleLines: {
              color: '#666',
              lineWidth: 0.3,
            },
            ticks: {
              color: '#666',
              backdropColor: 'transparent',
            },
            pointLabels: {
              font: {
                size: 11.5,
                weight: 'bold',
              },
            },
          },
        },
        plugins: {
          title: {
            font: {
              size: 30,
            },
          },
        },
      },
    });
  }
}
