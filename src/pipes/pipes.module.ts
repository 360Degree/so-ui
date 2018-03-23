import { NgModule } from '@angular/core'

import { FormatTimePipe } from './formatTime.pipe';

export const pipes=[
    FormatTimePipe
];

@NgModule({
    declarations:[pipes],
    exports:[pipes]
})

export class PipesModule{ }