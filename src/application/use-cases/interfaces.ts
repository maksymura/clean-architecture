export interface IHttpController<Req, Res> {
  handleRequest(req: Req, res: Res): Promise<void>
}

export interface IUseCase<Input, Result> {
  execute(input: Input): Promise<Result>
}