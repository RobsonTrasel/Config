import { Value } from '#src/annotations/Value'

export class DoesNotThrowNotFound {
  @Value('app.notFound', null)
  public defined: any

  @Value('app.notFoundApp', 'Athenna')
  public definedApp: any
}
