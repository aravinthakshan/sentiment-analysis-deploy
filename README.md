# Benchmarking DeBERTa, DistilBERT, and RoBERTa for Sentiment Analysis

This repository contains a benchmark study of transformer models—DeBERTa, DistilBERT, RoBERTa, and a custom RoBERTa-GRU hybrid—for sentiment analysis on popular datasets including IMDB, Rotten Tomatoes, and SST-2. The project compares model performance against published papers, analyzes methodological differences, and suggests avenues for future improvement.

## Table of Contents
1. [Introduction](#introduction)
2. [Background](#background)
3. [Methodology](#methodology)
4. [Datasets](#datasets)
5. [Models](#models)
6. [Results](#results)
7. [Inferences and Insights](#inferences-and-insights)
8. [References](#references)

## Introduction
This project benchmarks DeBERTa, DistilBERT, RoBERTa, and a custom RoBERTa-GRU model for sentiment analysis. By comparing model performance on datasets of varying sizes, it highlights strengths, limitations, and potential improvements over existing methodologies.

## Background
The models used in this study—BERT and its derivatives, including DeBERTa, DistilBERT, and RoBERTa—have transformed Natural Language Processing by improving contextual understanding. Each variant brings enhancements in efficiency, accuracy, or model size, making them valuable tools for a range of NLP applications.

## Methodology
### Experimental Setup
- **Models**: DeBERTa v3 small, DistilBERT, RoBERTa, and a custom RoBERTa-GRU hybrid.
- **Datasets**: IMDB, Rotten Tomatoes, and SST-2.
- **Hardware**: Experiments were run on an NVIDIA Tesla P100 GPU (Kaggle environment).
- **Libraries**: PyTorch 1.7.1, Transformers 4.5.0, Scikit-learn 0.24.1.

## Datasets
1. **IMDB**: 50,000 movie reviews, labeled for binary sentiment classification (25,000 for training and 25,000 for testing).
2. **Rotten Tomatoes**: 10,662 reviews with multi-class sentiment labels, converted to binary for consistency.
3. **SST-2**: 11,855 sentences from movie reviews, labeled for binary sentiment classification.

## Models
1. **DeBERTa**: Utilizes disentangled attention and an enhanced mask decoder for improved context and token prediction.
2. **DistilBERT**: A distilled, smaller, and faster version of BERT, retaining 97% of its language understanding.
3. **RoBERTa**: Robustly optimized BERT with enhanced training and no Next Sentence Prediction task.
4. **RoBERTa-GRU**: Custom model combining RoBERTa with a bidirectional GRU layer to improve sequential dependency handling.

## Results
**Model Performance (Accuracy & F1 Score)**
| Model               | Dataset          | Accuracy | F1 Score |
|---------------------|------------------|----------|----------|
| DistilBERT          | IMDB             | 90.88%   | 90.86%   |
| RoBERTa-GRU (custom)| IMDB             | 92.92%   | 92.78%   |
| DeBERTa-small       | Rotten Tomatoes  | 80.02%   | 79.94%   |
| DistilBERT          | Rotten Tomatoes  | 90.43%   | 90.43%   |
| DeBERTa-small       | SST-2            | 91.28%   | 91.28%   |
| RoBERTa             | SST-2            | 90.83%   | 90.76%   |

## Inferences and Insights
- **Pre-processing**: Tokenization and stop-word removal enhanced accuracy across models.
- **Challenges**: Memory allocation issues and lack of data shuffling affected RoBERTa’s performance on IMDB.
- **Future Improvements**: Using standardized heuristics for hyperparameter tuning and better project organization could yield improved results.

## References
The references include influential works on transformer models, such as Devlin et al. (BERT), Liu et al. (RoBERTa), and He et al. (DeBERTa). For detailed citations, see the full report in this repository.
