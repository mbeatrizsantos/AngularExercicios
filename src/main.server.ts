import { bootstrapApplication } from '@angular/platform-browser';
import { MeuComponente } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(MeuComponente, config);

export default bootstrap;
