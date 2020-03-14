
import { Module } from '@nestjs/common';

import { JsonScalar } from './scalars/json.scalar';
import { DateScalar } from './scalars/date.scalar';

@Module({
  providers: [
    JsonScalar,
    DateScalar,
  ],
})
export class CommonModule {}
