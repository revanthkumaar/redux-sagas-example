import {Subject} from 'rxjs'

const subject = new Subject();

export const textService = {
    sendText: text => subject.next({text: text}),
    clearText: information => subject.next({text: information}),
    onMessage: () => subject.asObservable()
}