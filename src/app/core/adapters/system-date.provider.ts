import {DateProvider} from "@core/ports/date.provider";

export class SystemDateProvider extends DateProvider {
    now() {
        return new Date();
    }
}
