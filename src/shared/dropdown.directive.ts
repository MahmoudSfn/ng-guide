import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropDown]'
})
export class DropDownDirective {
    // functionality to allow allow us to add a certain CSS class to the element
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }

    @HostListener('document:click', ['$event']) toggleClose(event) {
        this.isOpen = this.refEl.nativeElement.contains(event.target) ? this.isOpen : false;
    } 

    constructor(private refEl: ElementRef) {

    }
}