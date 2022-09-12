import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor() { }
  @Input() display:string='flex'
  @Input() justifyContent:string='space-around'
  @Input() height:string='20px'
  // @Input() backgroundColor:string="beige"
  @Input() marginTop:string="40"
  @Input() width:string="70px"
  @Input() border:string="none"
  @Input() color:string="white"

  @HostBinding ('style.display') displaytype!:string
  @HostBinding ('style.backgroundColor') background!:string
  @HostBinding ('style.justifyContent') justify!:string
  @HostBinding ('style.height') heights!:string;
  @HostBinding ('style.marginTop') margin!:string;
  @HostBinding ('style.width') widths!:string;
  @HostBinding ('style.border') borders!:string;
  @HostBinding ('style.color') colors!:string;

  ngOnInit(){
          this.displaytype = this.display,
          // this.background = this.backgroundColor,
          this.justify=this.justifyContent,
          this.heights=this.height
          this.borders=this.border,
          this.colors=this.color
          this.margin=this.marginTop
          // this.widths=this.width

  }

}
