import IEndereco from './IEndereco';

class Pessoa {
    private cgc: string
    private nome: string
    private sobrenome: string
    private email: string
    private readonly createdAt: Date
    private updatedAt: Date
    private endereco: IEndereco
    private contato: IContato

    constructor (cgc: string, nome: string, sobrenome: string, email: string, createdAt: Date, updatedAt: Date) {
        this.cgc = cgc
        this.nome = nome
        this.sobrenome = sobrenome
        this.email = email
        this.createdAt = createdAt
        this.updatedAt = new Date()
    }

    public getCgc(): string {
        return this.cgc
    }

    public getNome(): string {
        return this.nome
    }

    public getSobrenome(): string {
        return this.sobrenome
    }

    public getEmail(): string {
        return this.email
    }

    public setCgc(cgc: string): void {
        this.cgc = cgc
    }

    public setNome(nome: string): void {
        this.nome = nome
    }

    public setSobrenome(sobrenome: string): void {
        this.sobrenome = sobrenome
    }

    public setEmail(email: string): void {
        this.email = email
    }

    public getNomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`
    }

    public getCreatedAt(): Date {
        return this.createdAt
    }

    public getUpdatedAt(): Date {
        return this.updatedAt
    }

    public setUpdatedAt(updatedAt: Date): void {
        this.updatedAt = updatedAt
    }
}