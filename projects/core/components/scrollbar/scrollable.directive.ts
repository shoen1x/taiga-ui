import {Directive, ElementRef, Inject, OnInit} from '@angular/core';
import {TUI_SCROLLABLE} from '@taiga-ui/core/constants';

@Directive({
    selector: '[tuiScrollable]',
})
export class TuiScrollableDirective implements OnInit {
    constructor(@Inject(ElementRef) private readonly el: ElementRef<HTMLElement>) {}

    ngOnInit(): void {
        this.el.nativeElement.dispatchEvent(
            new CustomEvent(TUI_SCROLLABLE, {
                bubbles: true,
                detail: this.el.nativeElement,
            }),
        );
    }
}
