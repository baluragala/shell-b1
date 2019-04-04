import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "likes"
})
export class LikesPipe implements PipeTransform {
  transform(value: number, args?: any): string {
    if (value >= 1000) return `${value / 1000} k`;
    else return `${value}`;
  }
}
