import {Component, Inject, ElementRef} from '@angular/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'UnitTests2',
	templateUrl:'src/components/slides/advancedConcepts/unitTests2/unitTests2.html',
	styleUrls: ['src/components/slides/advancedConcepts/unitTests2/unitTests2.css'],
	directives: [Editor, EditorTab]
})
export class UnitTests2 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}