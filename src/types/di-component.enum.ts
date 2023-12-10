export const DIComponent = {
    LoggerInterface: Symbol.for('LoggerInterface'),
    Application: Symbol.for('Application'),
    ConfigInterface: Symbol.for('ConfigInterface'),
    DatabaseClientInterface: Symbol.for('DatabaseClientInterface'),
    UserServiceInterface: Symbol.for('UserServiceInterface'),
    UserModel: Symbol.for('UserModel'),
    RentalOfferServiceInterface: Symbol.for('RentalOfferServiceInterface'),
    RentalOfferModel: Symbol.for('RentalOfferModel'),
    CommentModel: Symbol.for('Commentmodel'),
    CommentServiceInterface: Symbol.for('CommentServiceInterface')
} as const;