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
  standalone: false,
})
export class ProfesionalGrowthComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() idChart: string = '';
  @ViewChild('canvas') canvas!: HTMLCanvasElement;
  public chart: any = null;
  private subscription = new Subscription();
  private chartData!: ICharData;
  private chartColors: string[] = ['#0094b3', '#ffc008', '#0da673'];
  constructor(
    private translate: TranslateService,
    private resumeService: ResumeService,
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.resumeService.infoUser.subscribe((info: IInfoUser) => {
        if (info.professionalGrowth && this.canvas) {
          this.setCharData(info.professionalGrowth);
          this.createChart();
        }
      }),
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
      const dataset = {
        label: e.year.toString(),
        data: e.values,
        backgroundColor: this.chartColors[index],
        borderColor: this.chartColors[index],
      };
      this.chartData.datasets.push(dataset as IDataset);
    });
  }

  private createChart() {
    if (this.chart) this.chart.destroy();
    const ctx = document.getElementById(this.idChart);

    this.chart = new Chart(ctx as any, {
      type: 'line',
      data: this.chartData,
      options: {
        plugins: {
          legend: {
            display: true,
          },
        },
        scales: {
          x: {
            grid: {
              color: 'rgb(62, 62, 66)',
            },
          },
          y: {
            grid: {
              color: 'rgb(62, 62, 66)',
            },
          },
        },
        elements: {
          line: {
            borderColor: 'rgb(173, 181, 189)',
            borderWidth: 2,
          },
          point: {
            backgroundColor: 'rgb(173, 181, 189)',
            radius: 4,
          },
        },
      },
    });
  }
}
