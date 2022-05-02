import { Component, OnInit } from '@angular/core';
import { EthereumService } from 'src/app/services/ethereum.service';

@Component({
  selector: 'volume-chart',
  templateUrl: './volume-chart.component.html',
  styleUrls: ['./volume-chart.component.scss']
})
export class VolumeChartComponent implements OnInit {

  constructor(private ethereumService: EthereumService) { }

  data: any

  ngOnInit(): void {
    this.getVolumeData()
  }

  getVolumeData() {
    this.ethereumService.getVolumeData().subscribe(ethVolumeData => {
      this.data = ethVolumeData.map(data => {
        return {
          year: new Date(data.time * 1000).toLocaleString('en-us',{month:'short', year:'numeric'}) + '',
          data: data.volume
        }
      })
    })
}

}
